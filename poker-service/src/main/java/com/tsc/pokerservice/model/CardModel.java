package com.tsc.pokerservice.model;

public class CardModel implements Comparable<CardModel> {
  private Long id;
  private Long valueId;
  private String cardName;
  private String cardSuit;
  private String cardSymbol;
  private String cardValue;

  CardModel() {}

  
  public Long getId() { return this.id; }
  public void setId(Long id) { this.id = id; }

  public Long getValueId() { return this.valueId; }
  public void setValueId(Long valueid) { this.valueId = valueid; }

  public String getName() { return this.cardName; }
  public void setName(String name) { this.cardName = name; }

  public String getCardSuit() { return this.cardSuit; }
  public void setCardSuit(String suit) {
    this.cardSuit = CardSuit.isCardSuit(suit) ? suit : null;
  }

  public String getCardSymbol() { return this.cardSymbol; }
  public void setCardSymbol(String cardSymbol) {
    this.cardSymbol = CardSymbol.isCardSymbol(cardSymbol) ? cardSymbol : null;
  }

  public String getCardValue() { return this.cardValue; }
  public void setCardValue(String cardValue) {
    this.cardValue = CardValue.isCardValue(cardValue) ? cardValue : null;
  }

  @Override
  public int compareTo(CardModel c) {
    return valueId.compareTo(c.getValueId());
  }
}
