package com.test_tool.test_tool.services.test_suite;

import com.test_tool.test_tool.models.Project;
import com.test_tool.test_tool.models.TestCase;
import com.test_tool.test_tool.models.TestCaseNario;
import com.test_tool.test_tool.models.TestSuite;
import com.test_tool.test_tool.repositories.ProjectRepository;
import com.test_tool.test_tool.repositories.TestCaseRepository;
import com.test_tool.test_tool.repositories.TestSerioRepository;
import com.test_tool.test_tool.repositories.TestSuiteRepository;
import com.test_tool.test_tool.requests.test_suite.*;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import com.test_tool.test_tool.ultis.CustomBeanUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class TestSuiteServiceImpl implements TestSuiteService {
    private final TestCaseRepository testCaseRepository;
    private final TestSuiteRepository testSuiteRepository;
    private final TestSerioRepository testSerioRepository;
    private final ProjectRepository projectRepository;

    @Override
    public ResponseEntity<?> getAllTestSuite(Pageable pageable, String projectId) {
        Project project = projectRepository.findById(projectId).orElse(null);
        if (project != null) {
            return ApiResponseHelper.success(project.getTestSuites());
        }
        return ApiResponseHelper.fallback(new Exception());
    }

    @Override
    public ResponseEntity<?> addTestCase(AddTestCaseRequest testCaseRequest) {
        TestCase testCase = new TestCase();
        BeanUtils.copyProperties(testCaseRequest, testCase);
        TestSuite testSuite = testSuiteRepository.findById(testCaseRequest.getTestSuiteId()).orElse(null);
        if (testSuite != null) {
            TestCase savedTestCase = testCaseRepository.save(testCase);
            for (AddTestCaseRequest caseRequest : testCaseRequest.getTestCaseRequests()) {
                TestCase tc = new TestCase();
                BeanUtils.copyProperties(caseRequest, tc);
                savedTestCase.getDetails().add(testCaseRepository.save(tc));
            }
            testSuite.addTestCase(testCaseRepository.save(savedTestCase));
            testSuiteRepository.save(testSuite);
        }
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> removeTestCase(RemoveTestCaseRequest removeTestCaseRequest) {
        TestCase testCase = testCaseRepository.findById(removeTestCaseRequest.getTestCaseId()).orElse(null);
        TestSuite testSuite = testSuiteRepository.findById(removeTestCaseRequest.getTestSuiteId()).orElse(null);
        if (testSuite != null) {
            testSuite.removeTestCase(testCase);
            testSuiteRepository.save(testSuite);
        }
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> addTestSerio(AddTestSerioRequest request) {
        TestCaseNario testCaseNario = new TestCaseNario();
        BeanUtils.copyProperties(request, testCaseNario);
        TestSuite testSuite = testSuiteRepository.findById(request.getTestSuiteId()).orElse(null);
        if (testSuite != null) {
            TestCaseNario savedTestCaseNario = testSerioRepository.save(testCaseNario);
            for (AddTestSerioRequest testSerioRequest : request.getTestSerioRequests()) {
                TestCaseNario tc = new TestCaseNario();
                BeanUtils.copyProperties(testSerioRequest, tc);
                tc.setIsApi(savedTestCaseNario.getIsApi());
                savedTestCaseNario.getDetails().add(testSerioRepository.save(tc));
            }
            testSuite.addTestSeri(testSerioRepository.save(savedTestCaseNario));
            testSuiteRepository.save(testSuite);
        }
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> removeTestSerio(RemoveTestSerio removeTestSerio) {
        TestCaseNario testCaseNario = testSerioRepository.findById(removeTestSerio.getTestSerioId()).orElse(null);
        TestSuite testSuite = testSuiteRepository.findById(removeTestSerio.getTestSuiteId()).orElse(null);
        if (testSuite != null) {
            testSuite.removeTestSeri(testCaseNario);
            testSuiteRepository.save(testSuite);
        }
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> addTestSuite(AddTestSuiteRequest request) {
        TestSuite testSuite = new TestSuite();
        BeanUtils.copyProperties(request, testSuite);
        Project project = projectRepository.findById(request.getProjectId()).orElse(null);
        if (project != null) {
            testSuite.setTestCaseNarios(new ArrayList<>());
            testSuite.setTestCases(new ArrayList<>());
            project.addTestSuite(testSuiteRepository.save(testSuite));
            projectRepository.save(project);
            return ApiResponseHelper.success();
        }
        return ApiResponseHelper.fallback(new Exception("Project not found"));
    }

    @Override
    public ResponseEntity<?> removeTestSuite(RemoveTestSuiteRequest request) throws Exception {
        TestSuite testSuite = testSuiteRepository.findById(request.getTestSuiteId()).orElse(null);
        if (testSuite != null) {
            testSuite.clearAllRelation();
            testSuiteRepository.save(testSuite);
            Project project = projectRepository.findById(request.getProjectId()).orElse(null);
            if (project != null) {
                project.removeTestSuite(testSuite);
                projectRepository.save(project);
                return ApiResponseHelper.success();
            }
        }
        return ApiResponseHelper.fallback(new Exception("Testsuite not found by id : " + request.getTestSuiteId()));
    }

    @Override
    public ResponseEntity<?> updateTest(UpdateTestSuiteRequest request, String id) throws Exception {
        TestSuite testSuite = testSuiteRepository.findById(id).orElse(null);
        if (testSuite != null) {
            BeanUtils.copyProperties(request, testSuite, CustomBeanUtil.getNullPropertyNames(request));
            testSuiteRepository.save(testSuite);
            return ApiResponseHelper.success();
        }
        return ApiResponseHelper.fallback(new Exception());
    }

    @Override
    public ResponseEntity<?> updateTest(UpdateTestCaseRequest request, String id) throws Exception {
        TestCase testSuite = testCaseRepository.findById(id).orElse(null);
        if (testSuite != null) {
            BeanUtils.copyProperties(request, testSuite, CustomBeanUtil.getNullPropertyNames(request));
            for (String removeId : request.getRemoveIds()) {
                testSuite.getDetails().remove(testCaseRepository.findById(removeId).orElse(null));
            }
            for (AddTestCaseRequest addTestCaseRequest : request.getAddTaskRequest()) {
                TestCase testCase = new TestCase();
                BeanUtils.copyProperties(addTestCaseRequest, testCase, CustomBeanUtil.getNullPropertyNames(addTestCaseRequest));
                testCase.setMarkType(testSuite.getMarkType());
                testSuite.getDetails().add(testCaseRepository.save(testCase));
            }
            testCaseRepository.save(testSuite);
            return ApiResponseHelper.success();
        }
        return ApiResponseHelper.fallback(new Exception());
    }

    @Override
    public ResponseEntity<?> updateTest(UpdateTestSerioRequest request, String id) throws Exception {
        TestCaseNario testSuite = testSerioRepository.findById(id).orElse(null);
        if (testSuite != null) {
            BeanUtils.copyProperties(request, testSuite, CustomBeanUtil.getNullPropertyNames(request));
            testSerioRepository.save(testSuite);
            return ApiResponseHelper.success();
        }
        return ApiResponseHelper.fallback(new Exception());
    }
}
