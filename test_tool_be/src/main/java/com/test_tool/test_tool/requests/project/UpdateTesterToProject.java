package com.test_tool.test_tool.requests.project;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class UpdateTesterToProject {
    private String projectId;
    private List<Long> testerId = new ArrayList<>();
}
