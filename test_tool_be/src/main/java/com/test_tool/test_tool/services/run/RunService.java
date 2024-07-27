package com.test_tool.test_tool.services.run;

import com.test_tool.test_tool.requests.run.ActionManualTestCaseRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface RunService {
    ResponseEntity<?> runTestSuite(String testSuiteId, String projectId);

    ResponseEntity<?> getAllRun(Pageable pageable, String projectId);

    ResponseEntity<?> actionManualTestCase(ActionManualTestCaseRequest request);

    ResponseEntity<?> finishRun(String runId);

    ResponseEntity<?> cancelRun(String request);

    ResponseEntity<?> pauseRun(String testSuiteId);
}
