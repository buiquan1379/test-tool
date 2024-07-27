package com.test_tool.test_tool.controllers;

import com.test_tool.test_tool.requests.test_suite.*;
import com.test_tool.test_tool.services.test_suite.TestSuiteService;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.hibernate.sql.Update;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test-suites")
@RequiredArgsConstructor
@CrossOrigin
public class TestSuiteController {

    private final TestSuiteService testSuiteService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getAll(@PathVariable(name = "id") String projectId, Pageable pageable) {
        try {
            return testSuiteService.getAllTestSuite(pageable, projectId);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PostMapping
    public ResponseEntity<?> addTestSuite(@RequestBody AddTestSuiteRequest request) {
        try {
            return testSuiteService.addTestSuite(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PostMapping("/add-test-case")
    public ResponseEntity<?> addTestCase(@RequestBody AddTestCaseRequest request) {
        try {
            return testSuiteService.addTestCase(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PostMapping("/add-test-serio")
    public ResponseEntity<?> addTestSerio(@Valid @RequestBody AddTestSerioRequest request) {
        try {
            return testSuiteService.addTestSerio(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @DeleteMapping("/remove-test-serio")
    public ResponseEntity<?> addTestSerio(@RequestBody RemoveTestSerio request) {
        try {
            return testSuiteService.removeTestSerio(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @DeleteMapping("/remove-test-case")
    public ResponseEntity<?> addTestSerio(@RequestBody RemoveTestCaseRequest request) {
        try {
            return testSuiteService.removeTestCase(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @DeleteMapping
    public ResponseEntity<?> removeTestSuite(@RequestBody RemoveTestSuiteRequest request) {
        try {
            return testSuiteService.removeTestSuite(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTestSuite(@PathVariable(name = "id") String id, @RequestBody UpdateTestSuiteRequest request) {
        try {
            return testSuiteService.updateTest(request, id);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PutMapping("/test-case/{id}")
    public ResponseEntity<?> updateTestCase(@PathVariable(name = "id") String id, @RequestBody UpdateTestCaseRequest request) {
        try {
            return testSuiteService.updateTest(request, id);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PutMapping("/test-serio/{id}")
    public ResponseEntity<?> updateTestSerio(@PathVariable(name = "id") String id, @RequestBody UpdateTestSerioRequest request) {
        try {
            return testSuiteService.updateTest(request, id);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }
}
