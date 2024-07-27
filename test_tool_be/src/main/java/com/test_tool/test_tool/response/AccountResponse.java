package com.test_tool.test_tool.response;

import com.test_tool.test_tool.models.Account;
import lombok.Data;

@Data
public class AccountResponse extends Account {
    private String token;
}
