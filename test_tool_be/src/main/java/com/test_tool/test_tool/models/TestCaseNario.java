package com.test_tool.test_tool.models;

import com.test_tool.test_tool.enums.MarkType;
import com.test_tool.test_tool.enums.TestCaseNarioStatus;
import com.test_tool.test_tool.enums.TestType;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
public class TestCaseNario {

    @Id
    private String ID;

    public TestCaseNario() {
        this.ID = UUID.randomUUID().toString();
    }

    private String name;
    @Column(columnDefinition = "TEXT")

    private String description;
    private String address;

    @Enumerated(EnumType.STRING)
    private TestCaseNarioStatus status;
    private String fileUrl;
    private String tags;

    @Enumerated(EnumType.STRING)
    private MarkType markType;
    private Boolean isApi;
    private Date updatedAt = new Date(System.currentTimeMillis());

    @OneToMany
    private List<TestCaseNario> details = new ArrayList<>();
}
