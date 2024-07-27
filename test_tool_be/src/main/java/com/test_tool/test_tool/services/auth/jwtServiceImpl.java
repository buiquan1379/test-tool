package com.test_tool.test_tool.services.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
@Slf4j
public class jwtServiceImpl implements JwtService {

    @Value("${app.jwtSecret}")
    private String SECRET_KEY;

    @Value("${app.jwtExpired}")
    private long TOKEN_EXPIRED_TIME;

    @Override
    public String extractUsername(String token) {
        return extractClaims(token, Claims::getSubject);
    }

    @Override
    public Date extractExpired(String token) {
        return extractClaims(token, Claims::getExpiration);
    }

    @Override
    public String generateToken(Map<String, Object> extractClaim, UserDetails userDetails) {
        return Jwts.builder().claims(extractClaim).subject(userDetails.getUsername()).issuedAt(new Date(System.currentTimeMillis())).expiration(new Date(System.currentTimeMillis() + TOKEN_EXPIRED_TIME)).signWith(genSignKey()).compact();
    }

    @Override
    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    @Override
    public <T> T extractClaims(String token, Function<Claims, T> claimsTFunction) {
        final Claims claims = extractAll(token);
        return claimsTFunction.apply(claims);
    }

    @Override
    public boolean isValid(String token, UserDetails userDetails) {
        return (userDetails.getUsername().equals(extractUsername(token)) && !isTokenExpired(token));
    }

    @Override
    public boolean isTokenExpired(String token) {
        Date currentDate = new Date(System.currentTimeMillis());
        return extractExpired(token).before(currentDate);
    }


    @Override
    public Claims extractAll(String token) {
        return Jwts.parser().setSigningKey(genSignKey()).build().parseSignedClaims(token).getBody();
    }

    @Override
    public Key genSignKey() {
        byte[] keyBytes = SECRET_KEY.getBytes();
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
