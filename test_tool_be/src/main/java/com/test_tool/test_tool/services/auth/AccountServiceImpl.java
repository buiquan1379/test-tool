package com.test_tool.test_tool.services.auth;

import com.test_tool.test_tool.enums.Role;
import com.test_tool.test_tool.models.Account;
import com.test_tool.test_tool.models.Project;
import com.test_tool.test_tool.repositories.AccountRepository;
import com.test_tool.test_tool.repositories.ProjectRepository;
import com.test_tool.test_tool.requests.auth.LoginRequest;
import com.test_tool.test_tool.requests.auth.RegisterRequest;
import com.test_tool.test_tool.response.AccountResponse;
import com.test_tool.test_tool.response.TesterResponse;
import com.test_tool.test_tool.ultis.ApiResponseHelper;
import com.test_tool.test_tool.ultis.SecurityHelper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class AccountServiceImpl implements AccountService {
    private final AccountRepository accountRepository;
    private final ProjectRepository projectRepository;

    private final JwtService jwtService;

    @Override
    public ResponseEntity<?> login(LoginRequest request) throws Exception {
        Account account = accountRepository.findByUsername(request.getUsername()).orElseThrow(() -> new Exception("Account not found"));
        if (!new BCryptPasswordEncoder().matches(request.getPassword(), account.getPassword())) {
            return ApiResponseHelper.fallback(new Exception("Password incorrect"));
        }
        String token = jwtService.generateToken(account);
        AccountResponse accountResponse = new ModelMapper().map(account, AccountResponse.class);
        accountResponse.setToken(token);
        return ApiResponseHelper.success(accountResponse);
    }

    @Override
    public ResponseEntity<?> register(RegisterRequest request) throws Exception {
        Account exit = accountRepository.findByUsername(request.getUsername()).orElse(null);
        if (exit != null) {
            return ApiResponseHelper.fallback(new Exception("Account exits"));
        }
        Account account = new Account();
        account.setUsername(request.getUsername());
        account.setRole(request.getRole());
        account.setPassword(new BCryptPasswordEncoder().encode(request.getPassword()));
        Account savedAccount = accountRepository.save(account);
        AccountResponse accountResponse = new ModelMapper().map(savedAccount, AccountResponse.class);
        accountResponse.setToken(jwtService.generateToken(savedAccount));
        return ApiResponseHelper.success(accountResponse);
    }

    @Override
    public ResponseEntity<?> getAllAccount(Pageable pageable) {
        return ApiResponseHelper.success(accountRepository.findAllByUsernameNot(pageable, SecurityHelper.getCurrentLoggedAccount(accountRepository).getUsername()));
    }

    @Override
    public ResponseEntity<?> getAllTester() {
        List<Account> accounts = accountRepository.findAllByRole(Role.ROLE_TESTER);
        List<TesterResponse> testerResponses = new ArrayList<>();
        for (Account account : accounts) {
            TesterResponse testerResponse = new TesterResponse();
            BeanUtils.copyProperties(account, testerResponse);
            List<Project> projects = projectRepository.findAllByTestersContaining(account);
            testerResponse.setProjects(projects);
            testerResponses.add(testerResponse);
        }
        return ApiResponseHelper.success(testerResponses);
    }

    @Override
    public ResponseEntity<?> deleteTester(long testerId) {
        // remove from all project
        Account account = accountRepository.findById(testerId).orElse(null);
        if (account != null) {
            List<Project> projects = projectRepository.findAllByTestersContaining(account);
            for (int i = 0; i < projects.size(); i++) {
                if (projects.get(i).getTesters().contains(account)) {
                    projects.get(i).removeTester(account);
                }
            }
            projectRepository.saveAll(projects);
            // delete user
            accountRepository.delete(account);
            return ApiResponseHelper.success();
        }
        return ApiResponseHelper.fallback(new Exception("Account not found by id : " + testerId));
    }
}
