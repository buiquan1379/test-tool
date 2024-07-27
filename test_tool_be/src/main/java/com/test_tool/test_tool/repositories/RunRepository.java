package com.test_tool.test_tool.repositories;

import com.test_tool.test_tool.models.Project;
import com.test_tool.test_tool.models.Run;
import com.test_tool.test_tool.models.TestSuite;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RunRepository extends JpaRepository<Run, String> {
    Run findByTestSuite(TestSuite testSuite);

    Page<Run> findAllByProject(Pageable pageable, Project project);
}
