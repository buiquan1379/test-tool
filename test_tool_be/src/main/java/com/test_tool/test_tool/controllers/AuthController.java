package com.test_tool.test_tool.controllers;

import com.test_tool.test_tool.requests.auth.LoginRequest;
import com.test_tool.test_tool.requests.auth.RegisterRequest;
import com.test_tool.test_tool.services.auth.AccountService;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/api/public/auth")
public class AuthController {

    private final AccountService accountService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        try {
            return accountService.login(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        try {
            return accountService.register(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }
}
