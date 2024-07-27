package com.test_tool.test_tool.repositories;

import com.test_tool.test_tool.enums.Role;
import com.test_tool.test_tool.models.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
//hibernate , JPA DATA
@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByUsername(String username);
    Page<Account> findAllByUsernameNot(Pageable pageable,String username);
    List<Account> findAllByRole(Role role);
}
