package com.tsc.pokerservice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tsc.pokerservice.validator.ValidateSession;
import com.tsc.pokerservice.model.CardModel;
import com.tsc.pokerservice.model.payloads.GameResultsPayload;
import com.tsc.pokerservice.model.payloads.SessionPayload;
import com.tsc.pokerservice.model.responses.GameResultsResponse;
import com.tsc.pokerservice.service.CardService;

@RestController
@RequestMapping("/v1")
public class CardController {
  private static Logger LOG = LoggerFactory.getLogger(CardController.class);

  CardService cardService;
  ValidateSession validateSession;
  CardController(
    CardService cardService,
    ValidateSession validateSession
  ) {
    this.cardService = cardService;
    this.validateSession = validateSession;
  }

  @PostMapping("/new-deck")
  public List<CardModel> getNewDeck(
    @RequestBody SessionPayload sessionPayload
  ) {
    if (validateSession.isValidUsername(sessionPayload.getUserName())
    && validateSession.isValidSession(sessionPayload.getSessionId())) {
      if (LOG.isInfoEnabled()) {
        LOG.info("Getting new deck of randomized cards.");
      }
      List<CardModel> rtn = this.cardService.getNewDeck();
      return rtn;
    }
    return null;
  }

  @PostMapping("/determine-results")
  public GameResultsResponse getResults(
    @RequestBody GameResultsPayload resultsPayload
  ) {
    if (validateSession.isValidSession(resultsPayload.getSessionId())) {
      if (LOG.isInfoEnabled()) {
        LOG.info("Getting results for game.");
      }
      return this.cardService.determineWinner(resultsPayload);
    }
    return null;
  }
  
}
