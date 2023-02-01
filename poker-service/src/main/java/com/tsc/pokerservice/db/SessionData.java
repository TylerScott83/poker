package com.tsc.pokerservice.db;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.tsc.pokerservice.model.payloads.SessionPayload;

@Repository
@Transactional
public class SessionData {
  private static Logger log = LoggerFactory.getLogger(SessionData.class);

  private static final String INSERT_SESSION_ID = """
    insert into SESSION_INFO (SESSION_ID,SESSION_USER,CREATED_ON,LAST_CHECKED) 
    values (?,?,sysdate,sysdate)
  """;

  private static final String CHECK_SESSION = """
    select count(*) 
    from SESSION_INFO 
    where SESSION_ID = ? 
    and CREATED_ON > sysdate - 1 
    and LAST_CHECKED >= dateadd(mi, -30, sysdate)
  """;

  static final String UPDATE_SESSION_CHECK = """
    update SESSION_INFO 
    set LAST_CHECKED = sysdate 
    where SESSION_ID = ?
  """;
  
  JdbcTemplate template;
  SessionData(
    JdbcTemplate jdbcTemplate
  ) {
    this.template = jdbcTemplate;
  }

  public int saveSessionId(String sessionId, SessionPayload sessionPayload) {
    try {
      log.debug("Saving Session ID - {}", sessionId);
      int rtn = template.update(INSERT_SESSION_ID, sessionId, sessionPayload.getUserName());
      return rtn;
    } catch (DataAccessException dae) {
      log.error("DAE when trying to create session id for: " + sessionId, dae);
      return 0;
    } catch (Exception e) {
      log.error("Unable to create session for: " + sessionId, e);
      return 0;
    }
  }

  public boolean sessionExists(String sessionId) {
    try {
      log.debug("Check existing Session ID - {}", sessionId);
      int cnt = template.queryForObject(CHECK_SESSION, Integer.class, new Object[] {sessionId});
      if (cnt > 0) {
        log.debug("Update last checked Session ID - {}", sessionId);
        template.update(UPDATE_SESSION_CHECK, sessionId); 
        return true;
      }
      return false;
    } catch (DataAccessException dae) {
      log.error("DAE when checking session exists: " + sessionId, dae);
      return false;
    } catch (Exception e) {
      log.error("Unable to check if session exists: " + sessionId, e);
      return false;
    }
  }
}
