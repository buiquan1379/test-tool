package com.test_tool.test_tool.requests.test_suite;

import com.test_tool.test_tool.enums.MarkType;
import com.test_tool.test_tool.enums.TestCaseStatus;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class AddTestCaseRequest {
    private String testSuiteId;
    private String name;
    private String description;
    private String address;
    private String tags;
    private MarkType markType;
    private TestCaseStatus testCaseStatus = TestCaseStatus.ACTIVE;
    private List<AddTestCaseRequest> testCaseRequests = new ArrayList<>();
}
