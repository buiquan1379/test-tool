package com.test_tool.test_tool.seeder;

import com.test_tool.test_tool.enums.Role;
import com.test_tool.test_tool.models.Account;
import com.test_tool.test_tool.repositories.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AccountSeeder implements CommandLineRunner {
    private final AccountRepository accountRepository;

    @Override
    public void run(String... args) throws Exception {
        Account account = accountRepository.findByUsername("manager@gmail.com").orElse(new Account());
        account.setPassword(new BCryptPasswordEncoder().encode("123456789"));
        account.setRole(Role.ROLE_MANAGER);
        account.setUsername("manager@gmail.com");
        accountRepository.save(account); // account one
        Account tester = accountRepository.findByUsername("tester1@gmail.com").orElse(new Account());
        tester.setRole(Role.ROLE_TESTER);
        tester.setUsername("tester1@gmail.com");
        tester.setPassword(new BCryptPasswordEncoder().encode("123456789"));
        accountRepository.save(tester);
    }
}
