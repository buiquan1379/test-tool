package com.test_tool.test_tool.models;

import com.test_tool.test_tool.enums.MarkType;
import com.test_tool.test_tool.enums.TestCaseStatus;
import com.test_tool.test_tool.enums.TestType;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
public class TestCase {
    @Id
    private String ID;

    public TestCase() {
        this.ID = UUID.randomUUID().toString();
    }

    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;
    private String address;
    private String tags;

    @Enumerated(EnumType.STRING)
    private MarkType markType;
    @Enumerated(EnumType.STRING)
    private TestCaseStatus testCaseStatus;

    @OneToMany
    private List<TestCase> details = new ArrayList<>();
}
