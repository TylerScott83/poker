package com.tsc.pokerservice.service;

import com.tsc.pokerservice.model.payloads.SessionPayload;
import com.tsc.pokerservice.model.responses.SessionResponse;

public interface SessionService {
  public SessionResponse createSessionId(SessionPayload sessionPayload);
  
}
