package com.test_tool.test_tool.controllers;

import com.test_tool.test_tool.ultis.ApiResponseHelper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ValidController {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleValidExceptions(Exception ex) {
        if (ex instanceof MethodArgumentNotValidException) {
            Map<String, String> errors = new HashMap<>();
            for (ObjectError error : ((MethodArgumentNotValidException) ex).getBindingResult().getAllErrors()) {
                String errorMessage = error.getDefaultMessage();
                String columnError = ((FieldError) error).getField();
                errors.put(columnError, errorMessage);
            }
            return ApiResponseHelper.invalid(errors);
        }
        if (ex instanceof BadCredentialsException) {
            return ApiResponseHelper.unAuthorized();
        }
        return ApiResponseHelper.fallback(ex);
    }
}

