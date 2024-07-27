package com.test_tool.test_tool.controllers;

import com.test_tool.test_tool.requests.run.ActionManualTestCaseRequest;
import com.test_tool.test_tool.services.run.RunService;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/runs")
@CrossOrigin
@RequiredArgsConstructor
public class RunController {
    private final RunService runService;

    @PutMapping("/finish-run/{id}")
    public ResponseEntity<?> finishRun(@PathVariable(name = "id") String runId) {
        try {
            return runService.finishRun(runId);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PostMapping("/{id}")
    public ResponseEntity<?> runTestSuite(@PathVariable(name = "id") String id, @RequestParam(name = "projectId") String projectId) {
        try {
            return runService.runTestSuite(id, projectId);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PutMapping
    public ResponseEntity<?> actionManualTestCase(@RequestBody ActionManualTestCaseRequest request) {
        try {
            return runService.actionManualTestCase(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PostMapping
    public ResponseEntity<?> cancelRun(String runId) {
        try {
            return runService.cancelRun(runId);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAllRun(@PathVariable(name = "id") String projectId, Pageable pageable) {
        try {
            return runService.getAllRun(pageable, projectId);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }
}
