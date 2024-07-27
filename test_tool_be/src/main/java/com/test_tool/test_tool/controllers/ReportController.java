package com.test_tool.test_tool.controllers;

import com.test_tool.test_tool.services.report.ReportService;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin
@RequiredArgsConstructor
@Slf4j
public class ReportController {

    private final ReportService reportService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getAllReport(@PathVariable(name = "id") String id, Pageable pageable) {
        try {
            return reportService.getAll(pageable, id);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }

    }

    @GetMapping("/by-id/{id}")
    public ResponseEntity<?> getById(@PathVariable(name = "id") String id) {
        try {
            return reportService.getById(id);
        } catch (Exception e) {
            return ApiResponseHelper.fallback(e);
        }

    }
}
