package com.tsc.pokerservice.model;

public class CardSuit {
  public static final String HEART = "heart";
  public static final String DIAMOND = "diamond";
  public static final String SPADE = "spade";
  public static final String CLUB = "club";

  public static boolean isCardSuit(String value) {
    boolean rtn = false;
    switch(value) {
      case HEART:
      case DIAMOND:
      case SPADE:
      case CLUB:
        rtn = true;
        break;
    }
    return rtn;
  }

}
