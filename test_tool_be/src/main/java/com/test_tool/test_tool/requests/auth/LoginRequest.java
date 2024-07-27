package com.test_tool.test_tool.requests.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {

    @NotBlank(message = "username not blank")
    private String username;

    @NotBlank(message = "password not blank")
    private String password;
}
