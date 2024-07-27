package com.test_tool.test_tool.models;

import com.test_tool.test_tool.enums.RunStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
public class Run {

    @Id
    private String ID;

    public Run() {
        this.ID = UUID.randomUUID().toString();
    }

    private String name;

    @OneToOne
    private TestSuite testSuite;

    @ManyToOne
    private Project project;

    private String description;

    private LocalDateTime startTime;

    private float percentPass;

    private LocalDateTime finishTime;

    @ManyToOne
    private Account tester;

    @Enumerated(EnumType.STRING)
    private RunStatus runStatus;

    private String timeDuration;
}
