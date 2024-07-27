package com.test_tool.test_tool.requests.project;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class UpdateTestSuiteToProject {
    private List<String> testSuiteIds = new ArrayList<>();
    private String projectId;
}
