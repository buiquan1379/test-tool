package com.test_tool.test_tool.requests.run;

import com.test_tool.test_tool.enums.TestCaseStatus;
import lombok.Data;

@Data
public class ActionManualTestCaseRequest {
    private String testSuiteId;
    private String testCaseId;
    private String runId;
    private TestCaseStatus status;
}
