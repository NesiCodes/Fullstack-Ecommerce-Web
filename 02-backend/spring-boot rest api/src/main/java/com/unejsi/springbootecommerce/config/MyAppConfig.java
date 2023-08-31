package com.unejsi.springbootecommerce.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyAppConfig implements WebMvcConfigurer {

    @Value("${allowed.origins}")
    private String[] allowedOrigins;

    @Value("${spring.data.rest.base-path}")
    private String basePath;



    @Override
    public void addCorsMappings(CorsRegistry registry) {

        //set up cors mapping
        registry.addMapping(basePath + "/**").allowedOrigins(allowedOrigins);
    }
}
