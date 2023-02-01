package com.tsc.pokerservice.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class OpenApi3Config {
  private final String moduleName;
  private final String apiVersion;

  @Value("${server.port}") protected String appPort;
  @Value("${server.servlet.context-path}") protected String appContext;

  OpenApi3Config() {
    this.moduleName = "poker-service";
    this.apiVersion = "1.0";
  }

  @Bean
  OpenAPI customOpenAPI() {
    final String SECURITY_SCHEMA_NAME = "bearerAuth";
    final String API_TITLE = String.format("%s API", moduleName);

    return new OpenAPI()
      .addSecurityItem(new SecurityRequirement().addList(SECURITY_SCHEMA_NAME))
      .components(
        new Components()
          .addSecuritySchemes(
            SECURITY_SCHEMA_NAME,
            new SecurityScheme()
              .name(SECURITY_SCHEMA_NAME)
              .type(SecurityScheme.Type.HTTP)
              .scheme("bearer")
              .bearerFormat("JWT")
          )
      )

      .info(new Info().title(API_TITLE).version(apiVersion))
        .addServersItem(new Server().url(String.format("http://localhost:%s%s", appPort, appContext)));


  }


}
