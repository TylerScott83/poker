package com.tsc.pokerservice.service;

import java.util.List;

import com.tsc.pokerservice.model.CardModel;
import com.tsc.pokerservice.model.payloads.GameResultsPayload;
import com.tsc.pokerservice.model.responses.GameResultsResponse;

public interface CardService {
  public List<CardModel> getNewDeck();
  public GameResultsResponse determineWinner(GameResultsPayload resultsPayload);
}
