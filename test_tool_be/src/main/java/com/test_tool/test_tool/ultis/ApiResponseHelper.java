package com.test_tool.test_tool.ultis;

import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ApiResponseHelper {

    public static ResponseEntity<?> invalid(Map<String, String> errors) {
        return new ResponseEntity<>(new Response(errors), HttpStatus.BAD_REQUEST);
    }

    @Data
    static class Response {
        private Map<String, String> messages;
        private Object data;
        private boolean isValid;
        private boolean isTokenExpired;
        private boolean serverError;

        public Response(Map<String, String> messages, Object data, boolean isValid, boolean isTokenExpired, boolean serverError) {
            this.messages = messages;
            this.data = data;
            this.isValid = isValid;
            this.isTokenExpired = isTokenExpired;
            this.serverError = serverError;
        }

        public Response(Object data) {
            this(new HashMap<>(), data, true, false, false);
        }

        public Response(Map<String, String> messages) {
            this(messages, null, false, false, false);
        }
    }

    public static ResponseEntity<?> success(Object data) {
        return new ResponseEntity<>(new Response(data), HttpStatus.OK);
    }

    public static ResponseEntity<?> fallback(Exception e) {
        Map<String, String> msgs = new HashMap<>();
        msgs.put("messages", e.getMessage());
        return new ResponseEntity<>(new Response(msgs, null, true, false, true), HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity<?> success() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public static ResponseEntity<?> unAuthorized() {
        return new ResponseEntity<>(new Response(new HashMap<>(), null, false, true, false), HttpStatus.UNAUTHORIZED);
    }
}
