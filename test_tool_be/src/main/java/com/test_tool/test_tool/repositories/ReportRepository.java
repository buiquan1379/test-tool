package com.test_tool.test_tool.repositories;

import com.test_tool.test_tool.models.Project;
import com.test_tool.test_tool.models.Report;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report, String> {
    Page<Report> findAllByProject(Pageable pageable, Project project);
}
