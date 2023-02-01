package com.tsc.pokerservice.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.Nullable;

public class CardModelMapper implements RowMapper<CardModel> {

  @Override
  @Nullable
  public CardModel mapRow(ResultSet rs, int rowNum) throws SQLException {
    CardModel cardModel = new CardModel();
    cardModel.setId(rs.getLong("ID"));
    cardModel.setValueId(rs.getLong("VALUEID"));
    cardModel.setName(rs.getString("NAME"));
    cardModel.setCardSuit(rs.getString("CARDSUIT"));
    cardModel.setCardSymbol(rs.getString("SYMBOL"));
    cardModel.setCardValue(rs.getString("CARDVALUE"));
    return cardModel;
  }
  
}
