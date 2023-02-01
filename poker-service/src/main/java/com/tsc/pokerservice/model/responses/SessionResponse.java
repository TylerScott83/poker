package com.tsc.pokerservice.model.responses;

import java.io.Serializable;

public class SessionResponse implements Serializable {
  private String sessionId;
  private String userName;

  public SessionResponse() {}
  public SessionResponse(
    String sessionid, String username
  ) {
    this.setSessionId(sessionid);
    this.setUserName(username);
  }

  public String getSessionId() { return this.sessionId; }
  public void setSessionId(String sessionid) { this.sessionId = sessionid; }

  public String getUserName() { return this.userName; }
  public void setUserName(String username) { this.userName = username; }
}
