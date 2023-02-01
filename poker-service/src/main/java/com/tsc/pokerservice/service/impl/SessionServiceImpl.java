package com.tsc.pokerservice.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.tsc.pokerservice.db.SessionData;
import com.tsc.pokerservice.model.payloads.SessionPayload;
import com.tsc.pokerservice.model.responses.SessionResponse;
import com.tsc.pokerservice.service.SessionService;

import java.util.UUID;

@Service
public class SessionServiceImpl implements SessionService {
  private static Logger LOG = LoggerFactory.getLogger(SessionServiceImpl.class);

  SessionData sessionData;
  SessionServiceImpl(
    SessionData session
  ) {
    this.sessionData = session;
  }

  @Override
  public SessionResponse createSessionId(SessionPayload sessionPayload) {
    if (LOG.isInfoEnabled()) { LOG.info("Initializing Session"); }

    UUID uuid = UUID.randomUUID();
    int resp = sessionData.saveSessionId(uuid.toString(), sessionPayload);

    if (resp > 0) {
      if (LOG.isInfoEnabled()) { LOG.info("Session Initialized successfully: {}", uuid); }
      return new SessionResponse(uuid.toString(), sessionPayload.getUserName());
    }
    return null;
  }

}
