package com.tsc.pokerservice.validator;

import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.tsc.pokerservice.db.SessionData;

@Service
public class ValidateSession {
  private static Logger LOG = LoggerFactory.getLogger(ValidateSession.class);
  private Pattern UUID_PATTERN = Pattern.compile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$");
  private Pattern USERNAME_PATTERN = Pattern.compile("^[a-zA-Z0-9_-]{3,30}$");

  SessionData sessionData;
  ValidateSession(
    SessionData sessionData
  ) {
    this.sessionData = sessionData;
  }

  public Boolean isValidSession(String sessionId) {
    if (isNotNull(sessionId) && isUUIDPattern(sessionId) && isExistingSessionId(sessionId)) {
      return true;
    }
    return false;
  }

  public Boolean isValidUsername(String userName) {
    if (isNotNullUsername(userName) && isUsernamePattern(userName)) {
      return true;
    }
    return false;
  }

  private boolean isNotNull(String sessionId) {
    if (sessionId == null) {
      if (LOG.isInfoEnabled()) {
        LOG.info("Session ID is null");
      }
      return false;
    }
    return true;
  }

  private boolean isUUIDPattern(String sessionId) {
    if (!UUID_PATTERN.matcher(sessionId).matches()) {
      if (LOG.isInfoEnabled()) {
        LOG.info("Session ID is not a UUID, {}", sessionId);
      }
      return false;
    }
    return true;
  }

  private boolean isExistingSessionId(String sessionId) {
    if (sessionData.sessionExists(sessionId)) {
      return true;
    }
    return false;
  }

  private boolean isNotNullUsername(String userName) {
    if (userName == null) {
      if (LOG.isInfoEnabled()) {
        LOG.info("User name is null");
      }
      return false;
    }
    return true;
  }

  private boolean isUsernamePattern(String userName) {
    if (!USERNAME_PATTERN.matcher(userName).matches()) {
      if (LOG.isInfoEnabled()) {
        LOG.info("Username is not a valid pattern, {}", userName);
      }
      return false;
    }
    return true;
  }

}
