package com.test_tool.test_tool.requests.test_suite;

import lombok.Data;

@Data
public class RemoveTestCaseRequest {
    private String testCaseId;
    private String testSuiteId;
}
