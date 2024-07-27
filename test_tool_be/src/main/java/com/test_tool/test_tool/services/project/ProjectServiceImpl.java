package com.test_tool.test_tool.services.project;

import com.test_tool.test_tool.enums.Role;
import com.test_tool.test_tool.models.Account;
import com.test_tool.test_tool.models.Project;
import com.test_tool.test_tool.repositories.AccountRepository;
import com.test_tool.test_tool.repositories.ProjectRepository;
import com.test_tool.test_tool.repositories.TestSuiteRepository;
import com.test_tool.test_tool.requests.project.AddProjectRequest;
import com.test_tool.test_tool.requests.project.UpdateTestSuiteToProject;
import com.test_tool.test_tool.requests.project.UpdateTesterToProject;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import com.test_tool.test_tool.ultis.SecurityHelper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository projectRepository;

    private final AccountRepository accountRepository;
    private final TestSuiteRepository testSuiteRepository;

    @Override
    public ResponseEntity<?> getAllProjectByUser(Pageable pageable) {
        Account account = SecurityHelper.getCurrentLoggedAccount(accountRepository);
        if (account == null) {
            return ApiResponseHelper.unAuthorized();
        }
        if (account.getRole().equals(Role.ROLE_MANAGER)) {
            return ApiResponseHelper.success(projectRepository.findAllByManager(pageable, account));
        } else {
            return ApiResponseHelper.success(projectRepository.findAllByTestersContaining(pageable, account));
        }
    }

    @Override
    public ResponseEntity<?> addProject(AddProjectRequest request) {
        Project project = new Project();
        BeanUtils.copyProperties(request, project);
        for (Long testerId : request.getTesterIds()) {
            accountRepository.findById(testerId).ifPresent(project::addTester);
        }
        project.setManager(SecurityHelper.getCurrentLoggedAccount(accountRepository));
        return ApiResponseHelper.success(projectRepository.save(project));
    }

    @Override
    public ResponseEntity<?> addTesterToProject(UpdateTesterToProject req) {
        Project project = projectRepository.findById(req.getProjectId()).orElse(null);
        if (project == null) {
            return ApiResponseHelper.fallback(new Exception("Project not found"));
        }
        for (long s : req.getTesterId()) {
            accountRepository.findById(s).ifPresent(project::addTester);
        }
        projectRepository.save(project);
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> removeTesterFromProject(UpdateTesterToProject req) {
        Project project = projectRepository.findById(req.getProjectId()).orElse(null);
        if (project == null) {
            return ApiResponseHelper.fallback(new Exception("Project not found"));
        }
        for (long s : req.getTesterId()) {
            accountRepository.findById(s).ifPresent(project::removeTester);
        }
        projectRepository.save(project);
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> removeTesuiteFromProject(UpdateTestSuiteToProject req) {
        Project project = projectRepository.findById(req.getProjectId()).orElse(null);
        if (project == null) {
            return ApiResponseHelper.fallback(new Exception("Project not found"));
        }
        for (String s : req.getTestSuiteIds()) {
            testSuiteRepository.findById(s).ifPresent(project::removeTestSuite);
        }
        projectRepository.save(project);
        return ApiResponseHelper.success();
    }

    @Override
    public ResponseEntity<?> addTesuiteFromProject(UpdateTestSuiteToProject req) {
        Project project = projectRepository.findById(req.getProjectId()).orElse(null);
        if (project == null) {
            return ApiResponseHelper.fallback(new Exception("Project not found"));
        }
        for (String s : req.getTestSuiteIds()) {
            testSuiteRepository.findById(s).ifPresent(project::addTestSuite);
        }
        projectRepository.save(project);
        return ApiResponseHelper.success();
    }
}
