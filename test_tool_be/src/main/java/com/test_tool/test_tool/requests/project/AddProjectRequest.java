package com.test_tool.test_tool.requests.project;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class AddProjectRequest {

    @NotBlank
    private String name;
    @NotBlank

    private String description;

    private String types;
    private List<Long> testerIds = new ArrayList<>();
    @NotBlank
    private String sourcePath;

}
