import { CardSuit, CardSymbol, CardValue } from "./card.enum";

export class CardSimple {
  id: number | undefined;
  valueId: number | undefined;
  cardName: string | undefined;
  cardSuit: CardSuit | undefined;
  cardSymbol: CardSymbol | undefined;
  cardValue: CardValue | undefined;

  constructor(
    id?: number,
    valueId? : number,
    name?: string,
    symbol?: CardSymbol,
    suit?: CardSuit,
    value?: CardValue,
  ) {
    this.id = id ? id : 0;
    this.valueId = valueId ? valueId : 0;
    this.cardName = name ? name : 'empty';
    this.cardSuit = suit ? suit : CardSuit.Blank;
    this.cardSymbol = symbol ? symbol : CardSymbol.BlankSym;
    this.cardValue = value ? value : CardValue.Blank;
  }
}