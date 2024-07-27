package com.test_tool.test_tool.services.report;

import com.test_tool.test_tool.repositories.ProjectRepository;
import com.test_tool.test_tool.repositories.ReportRepository;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

    private final ReportRepository reportRepository;

    private final ProjectRepository projectRepository;

    @Override
    public ResponseEntity<?> getAll(Pageable pageable, String projectId) {
        return ApiResponseHelper.success(reportRepository.findAllByProject(pageable, projectRepository.findById(projectId).orElse(null)));
    }

    @Override
    public ResponseEntity<?> getById(String id) {
        return ApiResponseHelper.success(reportRepository.findById(id).orElse(null));
    }
}
