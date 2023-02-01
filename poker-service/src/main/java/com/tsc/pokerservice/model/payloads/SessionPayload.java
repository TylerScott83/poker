package com.tsc.pokerservice.model.payloads;

public class SessionPayload {
  private String sessionId;
  private String userName;

  public SessionPayload() {}

  public String getSessionId() { return this.sessionId; }
  public void setSessionId(String sessionid) { this.sessionId = sessionid; }

  public String getUserName() { return this.userName; }
  public void setUserName(String username) { this.userName = username; }
}
