package com.test_tool.test_tool.ultis;

import com.test_tool.test_tool.models.Account;
import com.test_tool.test_tool.repositories.AccountRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class SecurityHelper {
    public static boolean isLogged() {
        return SecurityContextHolder.getContext().getAuthentication() != null;
    }

    public static void setAuthentication(Authentication authentication) {
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    public static Account getCurrentLoggedAccount(AccountRepository accountRepository) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (userDetails != null) {
            return accountRepository.findByUsername(userDetails.getUsername()).orElse(null);
        }
        return null;
    }

}
