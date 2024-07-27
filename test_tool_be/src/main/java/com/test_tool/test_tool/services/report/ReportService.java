package com.test_tool.test_tool.services.report;

import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface ReportService {
    ResponseEntity<?> getAll(Pageable pageable,String projectId);
    ResponseEntity<?> getById(String id);
}
