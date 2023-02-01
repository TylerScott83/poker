import { Component, Input, OnInit } from '@angular/core';
import { CardSize, CardStyle, CardSuit, CardSymbol, CardValue } from 'src/app/models/card.enum';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  @Input() card: Card | undefined = new Card(0, 0, 'empty', CardSymbol.BlankSym, CardSuit.Blank, CardValue.Blank, CardStyle.Dark, CardSize.Small, false);
  symbolCnt: number[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.symbolCnt = this.setSymbolCount();
  }

  private setSymbolCount(): number[] {
    if (this.card !== undefined) {
      switch(this.card.cardValue) {
        case CardValue.Two:
          return [0,1];
        case CardValue.Three:
          return [0,1,2];
        case CardValue.Four:
          return [0,1,2,3];
        case CardValue.Five:
          return [0,1,2,3,4];
        case CardValue.Six:
          return [0,1,2,3,4,5];
        case CardValue.Seven:
          return [0,1,2,3,4,5,6];
        case CardValue.Eight:
          return [0,1,2,3,4,5,6,7];
        case CardValue.Nine:
          return [0,1,2,3,4,5,6,7,8];
        case CardValue.Ten:
          return [0,1,2,3,4,5,6,7,8,9];
        case CardValue.Ace:
        case CardValue.Jack:
        case CardValue.Queen:
        case CardValue.King:
        case CardValue.Blank:
          return [0];
        default:
          break;
      }
    }
    return [];
  }
}
