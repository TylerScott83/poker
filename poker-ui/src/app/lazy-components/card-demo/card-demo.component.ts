import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardSize, CardStyle, CardSuit, CardSymbol, CardValue } from 'src/app/models/card.enum';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})
export class CardDemoComponent implements OnInit {

  small = CardSize.Small;
  medium = CardSize.Medium;

  suitHeart = CardSuit.Heart;
  suitDiamond = CardSuit.Diamond;
  suitSpade = CardSuit.Spade;
  suitClub = CardSuit.Club;

  symbolHeart = CardSymbol.HeartSym;
  symbolDiamond = CardSymbol.DiamondSym;
  symbolSpade = CardSymbol.SpadeSym;
  symbolClub = CardSymbol.ClubSym;

  styleDefault = CardStyle.Default;
  styleDark = CardStyle.Dark;
  styleInverted = CardStyle.Inverted;
  styleJest = CardStyle.Jest;

  valueCards: CardValue[] = [
    CardValue.Ace, CardValue.Two, CardValue.Three, CardValue.Four,
    CardValue.Five, CardValue.Six, CardValue.Seven, CardValue.Eight,
    CardValue.Nine, CardValue.Ten, CardValue.Jack, CardValue.Queen,
    CardValue.King, CardValue.Joker
  ]


  cardSize: CardSize = CardSize.Small;
  cardSuit: CardSuit = CardSuit.Club;
  cardSymbol: CardSymbol = CardSymbol.ClubSym;
  cardStyle: CardStyle = CardStyle.Default;
  cardValue: CardValue[] = [];

  demoCards: Card[] = [];


  constructor(
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`Ace High! - Demo`);
  }

  createCards(): void {
    this.demoCards = [];
    for (let i = 0; i < this.cardValue.length ; i++) {
      this.demoCards.push(new Card(
        i, i, 'bob',
        this.cardSymbol,
        this.cardSuit,
        this.cardValue[i], 
        this.cardStyle,
        this.cardSize,
        false
      ));
    }
  }

  addValue(value: CardValue): void {
    if (this.cardValue && this.cardValue.length > 0 && this.cardValue.includes(value)) {
      let index = this.cardValue.indexOf(value);
      if (index > -1) {
        this.cardValue.splice(index, 1);
      }
    } else {
      this.cardValue.push(value);
    }

    this.createCards();
  }

  changeSize(size: CardSize): void {
    this.cardSize = size;
    for (let card of this.demoCards) {
      card.size = this.cardSize;
    }
  }

  changeSuit(suit: CardSuit, symbol: CardSymbol): void {
    this.cardSuit = suit;
    this.cardSymbol = symbol;
    for (let card of this.demoCards) {
      card.cardSuit = this.cardSuit;
      card.cardSymbol = this.cardSymbol;
    }
  }

  changeStyle(style: CardStyle): void {
    this.cardStyle = style;
    for (let card of this.demoCards) {
      card.style = this.cardStyle;
    }
  }


  rando(): void {
    const amt = this.rand(5, 10);
    this.demoCards = [];
    for (let i = 0; i < amt ; i++) {
      const sym = this.rand(1, 4);
      this.demoCards.push(new Card(
        i, i, 'bob',
        this.getRandomSymbol(sym),
        this.getRandomSuit(sym),
        this.getRandomCardValue(), 
        this.getRandomCardStyle(),
        this.cardSize ? this.cardSize : CardSize.Small,
        false
      ))
    }
  }

  private getRandomSymbol(val: number): CardSymbol {
    switch(val) {
      case 1:
        return CardSymbol.HeartSym;
      case 2:
        return CardSymbol.DiamondSym;
      case 3:
        return CardSymbol.SpadeSym;
      case 4:
        return CardSymbol.ClubSym;
      default:
        return CardSymbol.ClubSym;
    }
  }

  private getRandomSuit(val: number): CardSuit {
    switch(val) {
      case 1:
        return CardSuit.Heart;
      case 2:
        return CardSuit.Diamond;
      case 3:
        return CardSuit.Spade;
      case 4:
        return CardSuit.Club;
      default:
        return CardSuit.Club;
    }
  }

  private getRandomCardValue(): CardValue {
    const val = this.rand(1, 14);
    switch(val) {
      case 1:
        return CardValue.Two;
      case 2:
        return CardValue.Three;
      case 3:
        return CardValue.Four;
      case 4:
        return CardValue.Five;
      case 5:
        return CardValue.Six;
      case 6:
        return CardValue.Seven;
      case 7:
        return CardValue.Eight;
      case 8:
        return CardValue.Nine;
      case 9:
        return CardValue.Ten;
      case 10:
        return CardValue.Jack;
      case 11:
        return CardValue.Queen;
      case 12:
        return CardValue.King;
      case 13:
        return CardValue.Ace;
      default:
        return CardValue.Joker;
    }
  }

  private getRandomCardStyle(): CardStyle {
    const val = this.rand(1, 4);
    switch(val) {
      case 1:
        return CardStyle.Default;
      case 2:
        return CardStyle.Inverted;
      case 3:
        return CardStyle.Dark;
      default:
        return CardStyle.Jest;
    }
  }

  private rand(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

}
