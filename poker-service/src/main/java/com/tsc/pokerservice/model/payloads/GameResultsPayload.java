package com.tsc.pokerservice.model.payloads;

import java.util.List;

import com.tsc.pokerservice.model.CardModel;

public class GameResultsPayload {
  private String sessionId;
  private List<CardModel> pcCards;
  private List<CardModel> npcCards;

  public GameResultsPayload() {}

  public String getSessionId() { return this.sessionId; }
  public void setSessionId(String sessionid) { this.sessionId = sessionid; }

  public List<CardModel> getPcCards() { return this.pcCards; }
  public void setPcCards(List<CardModel> pccards) { this.pcCards = pccards; }

  public List<CardModel> getNpcCards() { return this.npcCards; }
  public void getNpcCards(List<CardModel> npccards) { this.npcCards = npccards; }
  
}
