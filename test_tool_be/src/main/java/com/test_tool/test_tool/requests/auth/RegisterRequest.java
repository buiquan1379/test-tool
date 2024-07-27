package com.test_tool.test_tool.requests.auth;

import com.test_tool.test_tool.enums.Role;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterRequest {

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    private Role role = Role.ROLE_TESTER;
}
