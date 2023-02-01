package com.tsc.pokerservice.model;

public class CardSymbol {
  public static final String HEART = "&#x2665;";
  public static final String DIAMOND = "&#x2666;";
  public static final String SPADE = "&#x2660;";
  public static final String CLUB = "&#x2663;";

  public static boolean isCardSymbol(String value) {
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
