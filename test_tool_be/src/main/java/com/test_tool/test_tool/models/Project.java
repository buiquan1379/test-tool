package com.test_tool.test_tool.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Table(name = "projects")
public class Project {
    @Id
    private String ID;

    public Project() {
        this.ID = UUID.randomUUID().toString();
    }

    private String name;

    private String description;

    @ManyToMany
    private List<Account> testers = new ArrayList<>();

    private String types;
    @ManyToOne
    private Account manager;

    private String address;

    private String sourcePath;
    @OneToMany
    private List<TestSuite> testSuites = new ArrayList<>();

    public void addTestSuite(TestSuite testSuite) {
        this.testSuites.add(testSuite);
    }

    public void removeTestSuite(TestSuite testSuite) {
        this.testSuites.remove(testSuite);
    }

    public void clearTestSuite() {
        this.testSuites.clear();
    }

    public void addTester(Account account) {
        this.testers.add(account);
    }

    public void removeTester(Account account) {
        this.testers.remove(account);
    }

    public void clearTester() {
        this.testers.clear();
    }
}
