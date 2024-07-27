package com.test_tool.test_tool.requests.test_suite;

import com.test_tool.test_tool.enums.TestCaseNarioStatus;
import lombok.Data;

@Data
public class UpdateTestSerioRequest {
    private String name;
    private String description;
    private String address;
    private TestCaseNarioStatus status;
    private String fileUrl;
    private String type;
    private String tags;
    private String markType;
}
