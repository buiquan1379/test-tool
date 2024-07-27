package com.test_tool.test_tool.models;

import com.test_tool.test_tool.enums.TestSuiteStatus;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
public class TestSuite {
    @Id
    private String ID;

    public TestSuite() {
        this.ID = UUID.randomUUID().toString();
    }

    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;
    private String address;
    @Enumerated(EnumType.STRING)
    private TestSuiteStatus status;
    private String type;
    @OneToMany
    private List<TestCaseNario> testCaseNarios = new ArrayList<>();

    @OneToMany
    private List<TestCase> testCases = new ArrayList<>();

    @CreationTimestamp
    private LocalDateTime createdAt;
    public void clearAllRelation(){
        this.testCases.clear();
        this.testCaseNarios.clear();
    }
    public void removeTestSeri(TestCaseNario testCaseNario) {
        this.testCaseNarios.remove(testCaseNario);
    }
    public void addTestSeri(TestCaseNario testCaseNario){
        if (!this.testCaseNarios.contains(testCaseNario)){
            this.testCaseNarios.add(testCaseNario);
        }
    }

    public void removeTestCase(TestCase testCase) {
        this.testCases.remove(testCase);
    }
    public void addTestCase(TestCase testCase){
        if (!this.testCases.contains(testCase)){
            this.testCases.add(testCase);
        }
    }
}
