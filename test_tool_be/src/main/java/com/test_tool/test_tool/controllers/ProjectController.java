package com.test_tool.test_tool.controllers;

import com.test_tool.test_tool.requests.project.AddProjectRequest;
import com.test_tool.test_tool.requests.project.UpdateTestSuiteToProject;
import com.test_tool.test_tool.requests.project.UpdateTesterToProject;
import com.test_tool.test_tool.services.project.ProjectService;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/projects")
@CrossOrigin
public class ProjectController {
    private final ProjectService projectService;

    @GetMapping
    public ResponseEntity<?> getAllProject(Pageable pageable) {
        try {
            return projectService.getAllProjectByUser(pageable);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PostMapping
    public ResponseEntity<?> addProject(@Valid @RequestBody AddProjectRequest request) {
        try {
            return projectService.addProject(request);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PutMapping("/add-tester")
    public ResponseEntity<?> addTester(@RequestBody UpdateTesterToProject updateTesterToProject) {
        try {
            return projectService.addTesterToProject(updateTesterToProject);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PutMapping("/remove-tester")
    public ResponseEntity<?> removeTester(@RequestBody UpdateTesterToProject updateTesterToProject) {
        try {
            return projectService.removeTesterFromProject(updateTesterToProject);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PutMapping("/remove-suite")
    public ResponseEntity<?> removeSuite(@RequestBody UpdateTestSuiteToProject updateTestSuiteToProject) {
        try {
            return projectService.removeTesuiteFromProject(updateTestSuiteToProject);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }

    @PutMapping("/add-suite")
    public ResponseEntity<?> addSuite(@RequestBody UpdateTestSuiteToProject updateTestSuiteToProject) {
        try {
            return projectService.addTesuiteFromProject(updateTestSuiteToProject);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }
    }
}
