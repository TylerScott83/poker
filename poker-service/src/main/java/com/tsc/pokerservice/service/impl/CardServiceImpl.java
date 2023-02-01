package com.tsc.pokerservice.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.tsc.pokerservice.db.CardData;
import com.tsc.pokerservice.model.CardModel;
import com.tsc.pokerservice.model.payloads.GameResultsPayload;
import com.tsc.pokerservice.model.responses.GameResultsResponse;
import com.tsc.pokerservice.service.CardService;

@Service
public class CardServiceImpl implements CardService {
  private final Logger LOG = LoggerFactory.getLogger(CardServiceImpl.class);

  final static int SHUFFLE_COUNT = 3;

  final static int STRAIGHT_RUN = 5;
  final static int FOUR_OF_KIND = 4;
  final static int THREE_OF_KIND = 3;
  final static int PAIR = 2;


  CardData cardData;
  CardServiceImpl(
    CardData cardData
  ) {
    this.cardData = cardData;
  }


  @Override
  public List<CardModel> getNewDeck() {
    List<CardModel> cardDeck = this.cardData.getNewDeck();

    for (int i = 0; i < SHUFFLE_COUNT; i++) {
      if (LOG.isDebugEnabled()) { LOG.debug("...shuffle shuffle..."); }
      Collections.shuffle(cardDeck);
    }
    return cardDeck;
  }

  @Override
  public GameResultsResponse determineWinner(GameResultsPayload resultsPayload) {
    GameResultsResponse results = new GameResultsResponse();
    results.setPlayerPCHighestHand(CardServiceImpl.determineHighestPossibleHand(resultsPayload.getPcCards()));
    results.setPlayerNPCHighestHand(CardServiceImpl.determineHighestPossibleHand(resultsPayload.getNpcCards()));

    if (results.getPlayerPCHighestHand() != 0 && results.getPlayerPCHighestHand() == results.getPlayerNPCHighestHand()) {
      results.setIsDrawGame(CardServiceImpl.isDraw(resultsPayload.getPcCards(), resultsPayload.getNpcCards()));
    }
    
    return results;
  }
  
  private static int determineHighestPossibleHand(List<CardModel> cards) {
    if (cards.isEmpty()) { return 0; }
    Collections.sort(cards);

    List<Long> valueList = CardServiceImpl.getValueList(cards);

    if (CardServiceImpl.isFiveOfKind(cards)) {
      return 10;
    } else if (CardServiceImpl.isStraightFlush(cards, valueList)) {
      return 9;
    } else if (CardServiceImpl.isFourOfKind(cards)) {
      return 8;
    } else if (CardServiceImpl.isFullHouse(cards)) {
      return 7;
    } else if (CardServiceImpl.isFlush(cards)) {
      return 6;
    } else if (CardServiceImpl.isStraight(valueList)) {
      return 5;
    } else if (CardServiceImpl.isThreeOfKind(cards)) {
      return 4;
    } else if (CardServiceImpl.isTwoPair(cards)) {
      return 3;
    } else if (CardServiceImpl.isOnePair(cards)) {
      return 2;
    }
    return 1;
  }


  private static boolean isFiveOfKind(List<CardModel> cards) {
    // TODO : Will always be false for now. Have not implemented wild cards, yet.
    return false;
  }

  private static boolean isStraightFlush(List<CardModel> cards, List<Long> valueList) {
    if(CardServiceImpl.allSuitsMatch(cards) && CardServiceImpl.hasStraightRun(valueList, CardServiceImpl.STRAIGHT_RUN, 0)) {
      return true;
    }
    return false;
  }

  private static boolean isFourOfKind(List<CardModel> cards) {
    if(CardServiceImpl.hasDuplicates(cards, CardServiceImpl.FOUR_OF_KIND, false)) {
      return true;
    }
    return false;
  }

  private static boolean isFullHouse(List<CardModel> cards) {
    return false;
  }

  private static boolean isFlush(List<CardModel> cards) {
    if (CardServiceImpl.allSuitsMatch(cards)) {
      return true;
    }

    return false;
  }

  private static boolean isStraight(List<Long> valueList) {
    if (CardServiceImpl.hasStraightRun(valueList, CardServiceImpl.STRAIGHT_RUN, 0)) {
      return true;
    }
    return false;
  }

  private static boolean isThreeOfKind(List<CardModel> cards) {
    return false;
  }

  private static boolean isTwoPair(List<CardModel> cards) {
    return false;
  }

  private static boolean isOnePair(List<CardModel> cards) {
    return false;
  }

  private static boolean isDraw(List<CardModel> pcCards, List<CardModel> npcCards) {
    return false;
  }



  private static List<Long> getValueList(List<CardModel> cards) {
    List<Long> valueList = new ArrayList<>();
    
    for (CardModel card : cards) {
      valueList.add(card.getValueId());
    }
    return valueList;
  }

  private static boolean allSuitsMatch(List<CardModel> cards) {
    String initialSuit = cards.get(0).getCardSuit(); // Get initial suit.

    for (CardModel card : cards) {
      if (!(initialSuit.equals(card.getCardSuit()))) {
        return false; // Break out of method, we now know that not all matched so it cannot be a Straight Flush.
      }
    }
    return true;
  }

  private static boolean hasStraightRun(List<Long> valueList, int cardCount, int indexStart) {
    List<Long> tempRun = new ArrayList<>();

    for (int i = indexStart; i < valueList.size(); i++) {

      if (tempRun.size() == 0) {
        tempRun.add(valueList.get(i));
      } else {
        // Is valueList[i] greater by 1 than tempRun's last element
        if (valueList.get(i) == (tempRun.get(tempRun.size() - 1) + 1)) {
          tempRun.add(valueList.get(i));

          if (tempRun.size() >= cardCount) {
            return true;
          }
        } else {
          tempRun.clear();
          tempRun.add(valueList.get(i));
        }
      }
    }

    return false;
  }

  private static boolean hasDuplicates(List<CardModel> cards, int cardCount, boolean isTwoPair) {
    Map<String, Integer> suitCounter = new HashMap<String, Integer>() {{
      put("heart", 0);
      put("diamond", 0);
      put("spade", 0);
      put("club", 0);
    }};
    Map<String, Integer> valueCounter = new HashMap<String, Integer>() {{
      put("A", 0);
      put("1", 0);
      put("2", 0);
      put("3", 0);
      put("4", 0);
      put("5", 0);
      put("6", 0);
      put("7", 0);
      put("8", 0);
      put("9", 0);
      put("10", 0);
      put("J", 0);
      put("Q", 0);
      put("K", 0);
      put("Joker", 0);
    }};

    for (CardModel card: cards) {
      suitCounter.put(card.getCardSuit(), suitCounter.get(card.getCardSuit()) + 1);
      valueCounter.put(card.getCardValue(), valueCounter.get(card.getCardValue()) + 1);
    }

    int twoPairCount = 0;
    for (Map.Entry<String, Integer> suit : suitCounter.entrySet()) {
      if (suit.getValue() == cardCount) {
        if (!isTwoPair) { return true; }
        
        twoPairCount++;
        if (twoPairCount > 1) { return true; }
        // If we are looking for two - pair, we need to keep looking.
      }
    }

    for (Map.Entry<String, Integer> val : valueCounter.entrySet()) {
      if (val.getValue() == cardCount) {
        if (!isTwoPair) { return true; }

        twoPairCount++;
        if (twoPairCount > 1) { return true; }
        // If we are looking for two - pair, we need to keep looking.
      }
    }

    // Ao01 : This is where you are...
    // TODO : Parse through suitCounter and valueCounter to find a match for cardCount, return true if you find.
    //    This is flawed though.. If two pairs are found but using same card, I don't think it will count.... Ugh, lack of Poker knowledge.


    return false;
  }

}
