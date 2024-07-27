package com.test_tool.test_tool.services.auth;

import com.test_tool.test_tool.requests.auth.LoginRequest;
import com.test_tool.test_tool.requests.auth.RegisterRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface AccountService {
    ResponseEntity<?> login(LoginRequest request) throws Exception;
    ResponseEntity<?> register(RegisterRequest request) throws Exception;
    ResponseEntity<?> getAllAccount(Pageable pageable);

    ResponseEntity<?> getAllTester();
    ResponseEntity<?> deleteTester(long testerId);

}
