CREATE TABLE session_info (
  session_id    VARCHAR(36)   NOT NULL,
  session_user  VARCHAR(30)   NOT NULL,
  created_on    TIMESTAMP     NOT NULL,
  last_checked  TIMESTAMP     NOT NULL,
  PRIMARY KEY (session_id)
);

CREATE TABLE card_deck (
  id            INTEGER(3)   NOT NULL,
  name_id       INTEGER(3)   NOT NULL,
  suit_id       INTEGER(2)   NOT NULL,
  value_id      INTEGER(3)   NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE card_name (
  name_id       INTEGER(3)   NOT NULL,
  value_id      INTEGER(3)    NOT NULL,
  suit_id       INTEGER(2)   NOT NULL,
  value_cd      VARCHAR(50)    NOT NULL,
  PRIMARY KEY (name_id)
);

CREATE TABLE card_suit (
  suit_id       INTEGER(2)   NOT NULL,
  symbol_id     INTEGER(2)    NOT NULL,
  suit_cd       VARCHAR(10)   NOT NULL,
  suit_nm       VARCHAR(10)   NOT NULL,
  PRIMARY KEY (suit_id)
);

CREATE TABLE card_symbol (
  symbol_id     INTEGER(2)    NOT NULL,
  symbol_cd     VARCHAR(9)    NOT NULL,
  symbol_nm     VARCHAR(9)    NOT NULL,
  PRIMARY KEY (symbol_id)
);

CREATE TABLE card_value (
  value_id      INTEGER(3)    NOT NULL,
  value_cd      VARCHAR(5)    NOT NULL,
  value_nm      VARCHAR(5)    NOT NULL,
  PRIMARY KEY (value_id)
);