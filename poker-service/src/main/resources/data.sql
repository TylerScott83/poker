-- INSERT INTO SESSION_INFO (SESSION_ID,CREATED_ON) VALUES ("INIT SESSION",sysdate);
INSERT INTO session_info (session_id, session_user, created_on, last_checked) VALUES ('INIT', 'INIT', sysdate, sysdate);

INSERT INTO card_suit (suit_id, symbol_id, suit_cd, suit_nm) VALUES (0, 0, 'heart', 'Heart');
INSERT INTO card_suit (suit_id, symbol_id, suit_cd, suit_nm) VALUES (1, 1, 'diamond', 'Diamond');
INSERT INTO card_suit (suit_id, symbol_id, suit_cd, suit_nm) VALUES (2, 2, 'spade', 'Spade');
INSERT INTO card_suit (suit_id, symbol_id, suit_cd, suit_nm) VALUES (3, 3, 'club', 'Club');

INSERT INTO card_symbol (symbol_id, symbol_cd, symbol_nm) VALUES (0, 'heart', '&#x2665;');
INSERT INTO card_symbol (symbol_id, symbol_cd, symbol_nm) VALUES (1, 'diamond', '&#x2666;');
INSERT INTO card_symbol (symbol_id, symbol_cd, symbol_nm) VALUES (2, 'spade', '&#x2660;');
INSERT INTO card_symbol (symbol_id, symbol_cd, symbol_nm) VALUES (3, 'club', '&#x2663;');

INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (0, 'ace', 'A');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (1, 'two', '2');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (2, 'three', '3');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (3, 'four', '4');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (4, 'five', '5');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (5, 'six', '6');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (6, 'seven', '7');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (7, 'eight', '8');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (8, 'nine', '9');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (9, 'ten', '10');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (10, 'jack', 'J');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (11, 'queen', 'Q');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (12, 'king', 'K');
INSERT INTO card_value (value_id, value_cd, value_nm) VALUES (13, 'joker', 'Joker');

INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (0, 0, 0, 'ace of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (1, 0, 1, 'ace of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (2, 0, 2, 'ace of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (3, 0, 3, 'ace of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (4, 1, 0, 'two of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (5, 1, 1, 'two of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (6, 1, 2, 'two of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (7, 1, 3, 'two of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (8, 2, 0, 'three of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (9, 2, 1, 'three of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (10, 2, 2, 'three of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (11, 2, 3, 'three of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (12, 3, 0, 'four of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (13, 3, 1, 'four of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (14, 3, 2, 'four of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (15, 3, 3, 'four of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (16, 4, 0, 'five of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (17, 4, 1, 'five of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (18, 4, 2, 'five of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (19, 4, 3, 'five of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (20, 5, 0, 'six of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (21, 5, 1, 'six of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (22, 5, 2, 'six of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (23, 5, 3, 'six of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (24, 6, 0, 'seven of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (25, 6, 1, 'seven of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (26, 6, 2, 'seven of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (27, 6, 3, 'seven of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (28, 7, 0, 'eight of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (29, 7, 1, 'eight of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (30, 7, 2, 'eight of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (31, 7, 3, 'eight of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (32, 8, 0, 'nine of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (33, 8, 1, 'nine of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (34, 8, 2, 'nine of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (35, 8, 3, 'nine of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (36, 9, 0, 'ten of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (37, 9, 1, 'ten of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (38, 9, 2, 'ten of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (39, 9, 3, 'ten of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (40, 10, 0, 'jack of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (41, 10, 1, 'jack of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (42, 10, 2, 'jack of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (43, 10, 3, 'jack of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (44, 11, 0, 'queen of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (45, 11, 1, 'queen of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (46, 11, 2, 'queen of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (47, 11, 3, 'queen of clubs');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (48, 12, 0, 'king of hearts');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (49, 12, 1, 'king of diamonds');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (50, 12, 2, 'king of spades');
INSERT INTO card_name (name_id, value_id, suit_id, value_cd) VALUES (51, 12, 3, 'king of clubs');




INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (0, 0, 0, 0);  --   0, Ace of Hearts, heart, ace
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (1, 1, 1, 0);  --   1, Ace of Diamonds, diamond, ace
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (2, 2, 2, 0);  --   2, Ace of Spades, spades, ace
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (3, 3, 3, 0);  --   3, Ace of Clubs, clubs, ace
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (4, 4, 0, 1);  --   4, Two of Hearts, heart, two
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (5, 5, 1, 1);  --   5, Two of Diamonds, diamond, two
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (6, 6, 2, 1);  --   6, Two of Spades, spades, two
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (7, 7, 3, 1);  --   7, Two of Clubs, clubs, two
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (8, 8, 0, 2);  --   8, Three of Hearts, heart, three
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (9, 9, 1, 2);  --   9, Three of Diamonds, diamond, three
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (10, 10, 2, 2); -- 10, Three of Spades, spades, three
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (11, 11, 3, 2); -- 11, Three of Clubs, clubs, three
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (12, 12, 0, 3); -- 12, Four of Hearts, heart, four
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (13, 13, 1, 3); -- 13, Four of Diamonds, diamond, four
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (14, 14, 2, 3); -- 14, Four of Spades, spades, four
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (15, 15, 3, 3); -- 15, Four of Clubs, clubs, four
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (16, 16, 0, 4); -- 16, Five of Hearts, heart, five
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (17, 17, 1, 4); -- 17, Five of Diamonds, diamond, five
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (18, 18, 2, 4); -- 18, Five of Spades, spades, five
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (19, 19, 3, 4); -- 19, Five of Clubs, clubs, five
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (20, 20, 0, 5); -- 20, Six of Hearts, heart, six
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (21, 21, 1, 5); -- 21, Six of Diamonds, diamond, six
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (22, 22, 2, 5); -- 22, Six of Spades, spades, six
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (23, 23, 3, 5); -- 23, Six of Clubs, clubs, six
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (24, 24, 0, 6); -- 24, Seven of Hearts, heart, seven
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (25, 25, 1, 6); -- 25, Seven of Diamonds, diamond, seven
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (26, 26, 2, 6); -- 26, Seven of Spades, spades, seven
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (27, 27, 3, 6); -- 27, Seven of Clubs, clubs, seven
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (28, 28, 0, 7); -- 28, Eight of Hearts, heart, eight
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (29, 29, 1, 7); -- 29, Eight of Diamonds, diamond, eight
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (30, 30, 2, 7); -- 30, Eight of Spades, spades, eight
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (31, 31, 3, 7); -- 31, Eight of Clubs, clubs, eight
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (32, 32, 0, 8); -- 32, Nine of Hearts, heart, nine
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (33, 33, 1, 8); -- 33, Nine of Diamonds, diamond, nine
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (34, 34, 2, 8); -- 34, Nine of Spades, spades, nine
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (35, 35, 3, 8); -- 35, Nine of Clubs, clubs, nine
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (36, 36, 0, 9); -- 36, Ten of Hearts, heart, ten
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (37, 37, 1, 9); -- 37, Ten of Diamonds, diamond, ten
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (38, 38, 2, 9); -- 38, Ten of Spades, spades, ten
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (39, 39, 3, 9); -- 39, Ten of Clubs, clubs, ten
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (40, 40, 0, 10); -- 40, Jack of Hearts, heart, jack
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (41, 41, 1, 10); -- 41, Jack of Diamonds, diamond, jack
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (42, 42, 2, 10); -- 42, Jack of Spades, spades, jack
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (43, 43, 3, 10); -- 43, Jack of Clubs, clubs, jack
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (44, 44, 0, 11); -- 44, Queen of Hearts, heart, queen
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (45, 45, 1, 11); -- 45, Queen of Diamonds, diamond, queen
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (46, 46, 2, 11); -- 46, Queen of Spades, spades, queen
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (47, 47, 3, 11); -- 47, Queen of Clubs, clubs, queen
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (48, 48, 0, 12); -- 48, King of Hearts, heart, king
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (49, 49, 1, 12); -- 49, King of Diamonds, diamond, king
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (50, 50, 2, 12); -- 50, King of Spades, spades, king
INSERT INTO card_deck (id, name_id, suit_id, value_id) VALUES (51, 51, 3, 12); -- 51, King of Clubs, clubs, king