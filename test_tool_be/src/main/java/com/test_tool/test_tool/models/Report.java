package com.test_tool.test_tool.models;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
public class Report {
    @Id
    private String ID;

    public Report() {
        this.ID = UUID.randomUUID().toString();
    }

    private String name;

    @Column(length = 5000,columnDefinition = "TEXT")
    private String details;

    private String description;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @ManyToOne
    private Project project;

    private String address;
    private float passPercent;
}
