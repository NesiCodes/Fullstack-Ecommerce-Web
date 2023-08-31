package com.unejsi.springbootecommerce.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
class SecurityConfiguration{

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http

                // Require authentication for all requests under /api/orders
                .authorizeRequests((requests) -> requests.requestMatchers("/api/orders/**").authenticated())
                .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt) // validates access tokens as JWTs
                .cors(withDefaults())
                .csrf().disable() // disable csrf since we are not using cookies for session tracking
                .build();
    }
}
