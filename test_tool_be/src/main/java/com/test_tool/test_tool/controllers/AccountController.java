package com.test_tool.test_tool.controllers;

import com.test_tool.test_tool.services.auth.AccountService;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounts")
@PreAuthorize("hasRole('ROLE_MANAGER')")
@RequiredArgsConstructor
@CrossOrigin
public class AccountController {
    private final AccountService accountService;

    @GetMapping
    public ResponseEntity<?> getAll(Pageable pageable) {
        try {
            return accountService.getAllAccount(pageable);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @GetMapping("/all-tester")
    public ResponseEntity<?> getAllMember() {
        try {
            return accountService.getAllTester();
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PreAuthorize("hasRole('ROLE_MANAGER')")
    @DeleteMapping("/{testerId}")
    public ResponseEntity<?> deleteTester(@PathVariable(name = "testerId") long id) {
        try {
            return accountService.deleteTester(id);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }
}
