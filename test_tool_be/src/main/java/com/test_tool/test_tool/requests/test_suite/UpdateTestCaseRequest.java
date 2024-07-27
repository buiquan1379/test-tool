package com.test_tool.test_tool.requests.test_suite;

import com.test_tool.test_tool.enums.MarkType;
import com.test_tool.test_tool.enums.TestCaseStatus;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class UpdateTestCaseRequest {
    private String name;
    private String description;
    private String address;
    private String tags;
    private MarkType markType;
    private TestCaseStatus testCaseStatus;
    private List<String> removeIds = new ArrayList<>();

    private List<AddTestCaseRequest> addTaskRequest = new ArrayList<>();
}
