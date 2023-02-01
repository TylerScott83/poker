package com.tsc.pokerservice.model;

public class CardValue {
  public static final String ACE = "A";
  public static final String TWO = "2";
  public static final String THREE = "3";
  public static final String FOUR = "4";
  public static final String FIVE = "5";
  public static final String SIX = "6";
  public static final String SEVEN = "7";
  public static final String EIGHT = "8";
  public static final String NINE = "9";
  public static final String TEN = "10";
  public static final String JACK = "J";
  public static final String QUEEN = "Q";
  public static final String KING = "K";
  public static final String JOKER = "Joker";

  public static boolean isCardValue(String value) {
    boolean rtn = false;
    switch(value) {
      case ACE:
      case TWO:
      case THREE:
      case FOUR:
      case FIVE:
      case SIX:
      case SEVEN:
      case EIGHT:
      case NINE:
      case TEN:
      case JACK:
      case QUEEN:
      case KING:
      case JOKER:
        rtn = true;
        break;
    }
    return rtn;
  }
}
