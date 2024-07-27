package com.test_tool.test_tool.services.test_suite;

import com.test_tool.test_tool.requests.test_suite.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface TestSuiteService {
    ResponseEntity<?> getAllTestSuite(Pageable pageable,String projectId) throws Exception;

    ResponseEntity<?> addTestCase(AddTestCaseRequest testCaseRequest) throws Exception;

    ResponseEntity<?> removeTestCase(RemoveTestCaseRequest removeTestCaseRequest) throws Exception;

    ResponseEntity<?> addTestSerio(AddTestSerioRequest request) throws Exception;

    ResponseEntity<?> removeTestSerio(RemoveTestSerio removeTestSerio) throws Exception;

    ResponseEntity<?> addTestSuite(AddTestSuiteRequest request) throws Exception;

    ResponseEntity<?> removeTestSuite(RemoveTestSuiteRequest request) throws Exception;

    ResponseEntity<?> updateTest(UpdateTestSuiteRequest request,String id) throws Exception;

    ResponseEntity<?> updateTest(UpdateTestCaseRequest request ,String id) throws Exception;

    ResponseEntity<?> updateTest(UpdateTestSerioRequest request ,String id) throws Exception;

}
