package com.tsc.pokerservice.db;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.tsc.pokerservice.model.CardModel;
import com.tsc.pokerservice.model.CardModelMapper;

@Repository
@Transactional
public class CardData {
  private static Logger log = LoggerFactory.getLogger(CardData.class);

  private static final String GET_CARD_DECK = """
    select cd.id ID
      , cn.value_cd NAME
      , cs.suit_cd CARDSUIT
      , cs.symbol_nm SYMBOL
      , val.value_nm CARDVALUE
      , val.value_id VALUEID
    from
      ( select id, name_id, value_id, suit_id from card_deck) cd
      , ( select name_id, value_id, suit_id, value_cd from card_name ) cn
      , ( select csu.suit_id suit_id, csu.suit_cd suit_cd, csy.symbol_nm symbol_nm
        from card_suit csu, card_symbol csy
        where csu.symbol_id = csy.symbol_id
        and csu.suit_cd = csy.symbol_cd
      ) cs
      , ( select value_id, value_nm from card_value ) val
    where cd.name_id = cn.name_id
      and cd.value_id = cn.value_id
      and cd.suit_id = cn.suit_id
      and cd.suit_id = cs.suit_id
      and cd.value_id = val.value_id
  """;

  JdbcTemplate template;
  CardData(
    JdbcTemplate jdbcTemplate
  ) {
    this.template = jdbcTemplate;
  }

  public List<CardModel> getNewDeck() {
    if (log.isDebugEnabled()) {
      log.debug("Getting a new deck");
    }
    List<CardModel> records = template.query(GET_CARD_DECK, new CardModelMapper());
    return records;
  }
  
}
