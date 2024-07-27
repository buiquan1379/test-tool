package com.test_tool.test_tool.services.run;

import com.google.gson.*;
import com.test_tool.test_tool.adapter.LocalDateTimeTypeAdapter;
import com.test_tool.test_tool.enums.RunStatus;
import com.test_tool.test_tool.enums.TestCaseNarioStatus;
import com.test_tool.test_tool.enums.TestCaseStatus;
import com.test_tool.test_tool.enums.TestSuiteStatus;
import com.test_tool.test_tool.models.*;
import com.test_tool.test_tool.repositories.*;
import com.test_tool.test_tool.requests.run.ActionManualTestCaseRequest;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import com.test_tool.test_tool.ultis.SecurityHelper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Type;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class RunServiceImpl implements RunService {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final TestSerioRepository testSerioRepository;
    private final TestSuiteRepository testSuiteRepository;
    private final RunRepository runRepository;

    private final TestCaseRepository testCaseRepository;
    private final AccountRepository accountRepository;

    private final ReportRepository reportRepository;

    private final ProjectRepository projectRepository;

    @Override
    public ResponseEntity<?> runTestSuite(String testSuiteId, String projectId) {
        TestSuite testSuite = testSuiteRepository.findById(testSuiteId).orElse(null);
        Account account = SecurityHelper.getCurrentLoggedAccount(accountRepository);
        if (testSuite == null) return ApiResponseHelper.fallback(new Exception("Test sui not found"));
        Run exit = runRepository.findByTestSuite(testSuite);
        if (exit != null) {
            return ApiResponseHelper.fallback(new Exception("Testsuite is running!"));
        }
        Run run = new Run();
        run.setProject(projectRepository.findById(projectId).orElse(null));
        run.setDescription(testSuite.getDescription());
        run.setTestSuite(testSuite);
        run.setTester(account);
        run.setRunStatus(RunStatus.RUNNING);
        run.setName(testSuite.getName());
        run.setPercentPass(0);
        run.setStartTime(LocalDateTime.now());
        run.setFinishTime(LocalDateTime.now());
        runRepository.save(run);
        testSuite.setStatus(TestSuiteStatus.RUNNING);
        List<TestCase> testCases = testSuite.getTestCases();
        List<TestCaseNario> testCaseNarios = testSuite.getTestCaseNarios();
        for (TestCase testCase : testCases) {
            testCase.setTestCaseStatus(TestCaseStatus.RUNNING);
            for (TestCase tc : testCase.getDetails()) {
                tc.setTestCaseStatus(TestCaseStatus.RUNNING);
            }
        }
        for (TestCaseNario testCaseNario : testCaseNarios) {
            testCaseNario.setStatus(TestCaseNarioStatus.RUNNING);
            for (TestCaseNario tc : testCaseNario.getDetails()) {
                tc.setStatus(TestCaseNarioStatus.RUNNING);
            }
        }
        testSerioRepository.saveAll(testCaseNarios);
        testCaseRepository.saveAll(testCases);
        testSuiteRepository.save(testSuite);
        // create auto run thread
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> getAllRun(Pageable pageable, String projectId) {
        Project project = projectRepository.findById(projectId).orElse(null);
        return ApiResponseHelper.success(runRepository.findAllByProject(pageable, project));
    }

    @Override
    public ResponseEntity<?> actionManualTestCase(ActionManualTestCaseRequest request) {
        TestCase testCase = testCaseRepository.findById(request.getTestCaseId()).orElse(null);
        TestSuite testSuite = testSuiteRepository.findById(request.getTestSuiteId()).orElse(null);

        if (testCase == null) return ApiResponseHelper.fallback(new Exception());
        if (testSuite == null) return ApiResponseHelper.fallback(new Exception());

        testCase.setTestCaseStatus(request.getStatus());
        // handle

        float percentOfOneTestCase = (float) (100 / testSuite.getTestCases().size());
        float totalPercent = 0;
        switch (request.getStatus()) {
            case PASS, SKIPPED:
                testCase.setTestCaseStatus(request.getStatus());
                testCaseRepository.save(testCase);
        }
        Run run = runRepository.findById(request.getRunId()).orElse(null);
        if (run == null) return ApiResponseHelper.fallback(new Exception());
        for (TestCase testCase1 : run.getTestSuite().getTestCases()) {
            for (TestCase detail : testCase1.getDetails()) {
                if (detail.getTestCaseStatus().equals(TestCaseStatus.PASS)) {
                    totalPercent += percentOfOneTestCase;
                }
            }
        }
        run.setPercentPass(totalPercent > 100 ? 100 : totalPercent);
        runRepository.save(run);
        return ApiResponseHelper.success();
    }

    public ResponseEntity<?> finishRunWithStatus(String runId, RunStatus runStatus) {
        // save to history
        Run run = runRepository.findById(runId).orElse(null);
        if (run == null) return ApiResponseHelper.fallback(new Exception());
        run.setFinishTime(LocalDateTime.now());
        run.setRunStatus(runStatus);
        Run savedRun = runRepository.save(run);

        Report report = new Report();
        report.setDescription(run.getDescription());
        report.setPassPercent(run.getPercentPass());
        String data = new Gson().toJson(savedRun);
        report.setDetails(data);
        report.setProject(run.getProject());
        // set all test case of test suite status to active
        List<TestCase> testCases = savedRun.getTestSuite().getTestCases();
        for (TestCase testCase : testCases) {
            testCase.setTestCaseStatus(TestCaseStatus.ACTIVE);
            for (TestCase testCase1 : testCase.getDetails()) {
                testCase1.setTestCaseStatus(TestCaseStatus.ACTIVE);
            }
        }
        reportRepository.save(report);
        testCaseRepository.saveAll(testCases);
        TestSuite testSuite = savedRun.getTestSuite();
        testSuite.setStatus(TestSuiteStatus.ACTIVE);
        testSuiteRepository.save(testSuite);
        //delete run
        runRepository.delete(savedRun);
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> finishRun(String runId) {
        // save to history
        Run run = runRepository.findById(runId).orElse(null);
        if (run == null) return ApiResponseHelper.fallback(new Exception());
        run.setFinishTime(LocalDateTime.now());
        run.setRunStatus(RunStatus.FINISH);
        Duration duration = Duration.between(run.getStartTime(), LocalDateTime.now());
        run.setTimeDuration(String.format("%d hours %d minutes %seconds", duration.toHours(), duration.toMinutes(), duration.getSeconds()));
        Run savedRun = runRepository.save(run);

        Report report = new Report();
        report.setDescription(run.getDescription());
        report.setPassPercent(run.getPercentPass());

        Gson gson = new GsonBuilder().registerTypeAdapter(LocalDateTime.class, new LocalDateTimeTypeAdapter()).create();

        String data = gson.toJson(savedRun);
        report.setDetails(data);
        report.setProject(run.getProject());
        // set all test case of test suite status to active
        List<TestCase> testCases = savedRun.getTestSuite().getTestCases();
        for (TestCase testCase : testCases) {
            testCase.setTestCaseStatus(TestCaseStatus.ACTIVE);
            for (TestCase testCase1 : testCase.getDetails()) {
                testCase1.setTestCaseStatus(TestCaseStatus.ACTIVE);
            }
        }
        reportRepository.save(report);
        testCaseRepository.saveAll(testCases);
        TestSuite testSuite = savedRun.getTestSuite();
        testSuite.setStatus(TestSuiteStatus.ACTIVE);
        testSuiteRepository.save(testSuite);
        //delete run
        runRepository.delete(savedRun);
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> cancelRun(String runId) {
        return this.finishRunWithStatus(runId, RunStatus.CANCEL);
    }

    @Override
    public ResponseEntity<?> pauseRun(String runId) {
        Run run = runRepository.findById(runId).orElse(null);
        if (run == null) {
            return ApiResponseHelper.fallback(new Exception("No runner found by id : " + runId));
        }
        run.setRunStatus(RunStatus.PAUSE);
        TestSuite testSuite = run.getTestSuite();
        testSuite.setStatus(TestSuiteStatus.PAUSED);
        // test
        List<TestCase> testCases = testSuite.getTestCases();
        List<TestCaseNario> testCaseNarios = testSuite.getTestCaseNarios();
        for (TestCase testCase : testCases) {
            testCase.setTestCaseStatus(TestCaseStatus.PAUSE);
        }
        for (TestCaseNario testCaseNario : testCaseNarios) {
            testCaseNario.setStatus(TestCaseNarioStatus.PAUSE);
        }
        testSerioRepository.saveAll(testCaseNarios);
        testCaseRepository.saveAll(testCases);
        testSuiteRepository.save(testSuite);
        runRepository.save(run);
        return ApiResponseHelper.success();
    }
}
