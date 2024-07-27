package com.test_tool.test_tool.requests.test_suite;

import com.test_tool.test_tool.enums.MarkType;
import com.test_tool.test_tool.enums.TestCaseNarioStatus;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class AddTestSerioRequest {

    @NotBlank
    private String testSuiteId;

    @NotBlank
    private String name;

    @NotBlank
    private String description;

    private String address;
    private TestCaseNarioStatus status = TestCaseNarioStatus.ACTIVE;
    @NotBlank
    private String fileUrl;
    private Boolean isApi;
    @NotBlank
    private String tags;
    private MarkType markType;
    private List<AddTestSerioRequest> testSerioRequests = new ArrayList<>();
}
