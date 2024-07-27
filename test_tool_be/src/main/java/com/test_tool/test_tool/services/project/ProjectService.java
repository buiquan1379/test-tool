package com.test_tool.test_tool.services.project;

import com.test_tool.test_tool.requests.project.AddProjectRequest;
import com.test_tool.test_tool.requests.project.UpdateTestSuiteToProject;
import com.test_tool.test_tool.requests.project.UpdateTesterToProject;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface ProjectService {
    ResponseEntity<?> getAllProjectByUser(Pageable pageable);

    ResponseEntity<?> addProject(AddProjectRequest request);

    ResponseEntity<?> addTesterToProject(UpdateTesterToProject req);

    ResponseEntity<?> removeTesterFromProject(UpdateTesterToProject req);

    ResponseEntity<?> removeTesuiteFromProject(UpdateTestSuiteToProject req);
    ResponseEntity<?> addTesuiteFromProject(UpdateTestSuiteToProject req);

}
