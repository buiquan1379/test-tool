package com.test_tool.test_tool.repositories;

import com.test_tool.test_tool.models.TestCase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestCaseRepository extends JpaRepository<TestCase,String> {
}
