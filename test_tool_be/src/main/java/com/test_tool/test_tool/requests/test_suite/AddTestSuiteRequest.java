package com.test_tool.test_tool.requests.test_suite;

import com.test_tool.test_tool.enums.TestSuiteStatus;
import lombok.Data;

@Data
public class AddTestSuiteRequest {
    private String name;
    private String description;
    private String address;
    private String type;
    private TestSuiteStatus status = TestSuiteStatus.ACTIVE;
    private String projectId;
}
