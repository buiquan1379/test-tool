package com.test_tool.test_tool.requests.test_suite;

import lombok.Data;

@Data
public class RemoveTestSuiteRequest {

    private String testSuiteId;
    private String projectId;
}
