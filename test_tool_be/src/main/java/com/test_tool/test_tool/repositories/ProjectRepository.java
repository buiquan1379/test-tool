package com.test_tool.test_tool.repositories;

import com.test_tool.test_tool.models.Account;
import com.test_tool.test_tool.models.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String> {
    Page<Project> findAllByTestersContaining(Pageable pageable, Account tester);

    Page<Project> findAllByManager(Pageable pageable, Account manager);

    List<Project> findAllByTestersContaining(Account tester);
}
