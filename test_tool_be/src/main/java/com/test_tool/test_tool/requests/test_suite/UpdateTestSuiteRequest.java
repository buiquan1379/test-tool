package com.test_tool.test_tool.requests.test_suite;

import com.test_tool.test_tool.enums.TestSuiteStatus;
import lombok.Data;

import java.util.List;

@Data
public class UpdateTestSuiteRequest {
    private String name;
    private String description;
    private String address;
    private String type;
    private TestSuiteStatus status;
}
