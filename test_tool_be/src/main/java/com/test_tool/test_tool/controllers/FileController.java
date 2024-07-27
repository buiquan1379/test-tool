package com.test_tool.test_tool.controllers;

import com.test_tool.test_tool.ultis.ApiResponseHelper;
import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
@RequestMapping("/api/public/files")
public class FileController {
    public static String UPLOAD_DIR = "src/main/resources/uploads/";

    @PostConstruct
    public void init() {
        File uploadDir = new File(UPLOAD_DIR);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@Valid @NotNull @RequestParam("file") MultipartFile file, @RequestParam(value = "source", required = false) String source) {
        try {
            if (file.isEmpty()) {
                return ApiResponseHelper.fallback(new Exception("File cannot be null"));
            }
            byte[] bytes = file.getBytes();
            Path path = null;
            String filename = "ID-" + UUID.randomUUID().toString() + "-ID" + file.getOriginalFilename();
            if (source != null) {
                String newDir = UPLOAD_DIR + source + "/";
                File dir = new File(newDir);
                if (!dir.exists()) {
                    dir.mkdirs();
                }
                path = Paths.get(newDir + filename);
            } else {
                path = Paths.get(UPLOAD_DIR + filename);
            }
            Files.write(path, bytes);
            return ApiResponseHelper.success(source + "/" + filename);
        } catch (Exception e) {
            log.error(e.getMessage());
            return ApiResponseHelper.fallback(e);
        }
    }

    @GetMapping("/download/{filename}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable(name = "filename") String filename, @RequestParam(name = "source", required = false) String source) {
        try {
            Path path = Paths.get(UPLOAD_DIR + filename);
            if (source != null) {
                path = Paths.get(UPLOAD_DIR + source + "/" + filename);
            }
            if (path.toFile().exists()) {
                byte[] data = Files.readAllBytes(path);
                return ResponseEntity.ok()
                        .header("Content-Disposition", "attachment; filename=\"" + filename + "\"")
                        .body(data);
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateFileContent(@RequestBody Map<String, String> payload) {
        String filename = payload.get("filename");
        String content = payload.get("content");
        String source = payload.get("source");

        try {
            Path path = Paths.get(UPLOAD_DIR + filename);
            if (source != null) {
                path = Paths.get(UPLOAD_DIR + source + "/" + filename);
            }
            if (path.toFile().exists()) {
                Files.write(path, content.getBytes());
                return ApiResponseHelper.success("File updated successfully");
            } else {
                return ApiResponseHelper.fallback(new Exception("File not found"));
            }
        } catch (IOException e) {
            log.error(e.getMessage());
            return ApiResponseHelper.fallback(e);
        }
    }
}
