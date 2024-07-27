package com.test_tool.test_tool.response;

import com.test_tool.test_tool.models.Account;
import com.test_tool.test_tool.models.Project;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class TesterResponse extends Account {
    List<Project> projects = new ArrayList<>();
}
