package com.test_tool.test_tool.repositories;

import com.test_tool.test_tool.models.TestSuite;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestSuiteRepository extends JpaRepository<TestSuite, String> {
}
