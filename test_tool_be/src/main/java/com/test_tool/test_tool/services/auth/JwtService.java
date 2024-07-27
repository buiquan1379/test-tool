package com.test_tool.test_tool.services.auth;

import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

public interface JwtService {

    String extractUsername(String token);

    Date extractExpired(String token);

    String generateToken(Map<String, Object> extractClaim, UserDetails userDetails);

    String generateToken(UserDetails userDetails);

    <T> T extractClaims(String token, Function<Claims, T> claimsTFunction);

    boolean isValid(String token, UserDetails userDetails);

    boolean isTokenExpired(String token);

    Claims extractAll(String token);

    Key genSignKey();
}
