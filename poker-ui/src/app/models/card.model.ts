import { CardSize, CardStyle, CardSuit, CardSymbol, CardValue } from "./card.enum";

export class Card {
  id: number | undefined;
  valueId: number | undefined;
  cardName: string | undefined;
  cardSuit: CardSuit | undefined;
  cardSymbol: CardSymbol | undefined;
  cardValue: CardValue | undefined;
  style: CardStyle | undefined;
  size: CardSize | undefined;
  isWild: boolean | undefined;


  constructor(
    id?: number,
    valueId? : number,
    name?: string,
    symbol?: CardSymbol,
    suit?: CardSuit,
    value?: CardValue,
    style?: CardStyle,
    size?: CardSize,
    isWild?: boolean
  ) {
    this.id = id ? id : 0;
    this.valueId = valueId ? valueId : 0;
    this.cardName = name ? name : 'empty';
    this.cardSuit = suit ? suit : CardSuit.Blank;
    this.cardSymbol = symbol ? symbol : CardSymbol.BlankSym;
    this.cardValue = value ? value : CardValue.Blank;
    this.style = style ? style : CardStyle.Dark;
    this.size = size ? size : CardSize.Small;
    this.isWild = isWild ? isWild : false;
  }
}