package com.tsc.pokerservice.controller;

import java.io.Serializable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tsc.pokerservice.model.payloads.SessionPayload;
import com.tsc.pokerservice.service.SessionService;
import com.tsc.pokerservice.validator.ValidateSession;



@RestController
@RequestMapping("/v1")
public class SessionController {

  SessionService sessionService;
  ValidateSession validateSession;
  SessionController(
    SessionService sessionService,
    ValidateSession validateSession
  ) {
    this.sessionService = sessionService;
    this.validateSession = validateSession;
  }
  
  @PostMapping("/check-session")
  public Boolean checkSession(
    @RequestBody SessionPayload sessionPayload
  ) {
    if (validateSession.isValidUsername(sessionPayload.getUserName())
    && validateSession.isValidSession(sessionPayload.getSessionId())) {
      return true;
    }
    return false;
  }

  @PostMapping("/initializeSession")
  public Serializable initializeSession(
    @RequestBody SessionPayload sessionPayload
  ) {
    if (validateSession.isValidUsername(sessionPayload.getUserName())) {
      return sessionService.createSessionId(sessionPayload);
    }
    return false;
  }

}
