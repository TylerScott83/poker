import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { HttpErrorHandler } from '../core/http-error.handler';
import { SessionDataService } from '../core/session-data.service';
import { CardSimple } from '../models/card-simple.model';
import { CardSize, CardStyle } from '../models/card.enum';
import { Card } from '../models/card.model';
import { GameResultsPayload } from '../models/game-results-payload';
import { GameResultsResponse } from '../models/game-results-response';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  static readonly DEALER_HAND_SIZE: number = 2;
  static readonly PC_HAND_SIZE: number = 3;
  static readonly NPC_HAND_SIZE: number = 3;

  constructor(
    private http: HttpClient,
    private httpError: HttpErrorHandler,
    private sessionDataService: SessionDataService
  ) { }

  getCardDeck(): Observable<Card[] | any> {
    const url = `${environment.service.pokerURL}/v1/new-deck`;
    const sessionData = this.sessionDataService.getSession();

    return this.http.post<Card[]>(url, sessionData).pipe(
      catchError(error => this.httpError.handleError(error)));
  }

  getResults(pcCards: CardSimple[], npcCards: CardSimple[]): Observable<GameResultsResponse | any> {

    debugger;
    const url = `${environment.service.pokerURL}/v1/determine-results`;
    const sessionData = this.sessionDataService.getSession();
    const payload: GameResultsPayload = new GameResultsPayload();
    if (sessionData) {
      payload.sessionId = sessionData?.sessionId;
    }
    payload.pcCards = pcCards;
    payload.npcCards = npcCards;

    return this.http.post<GameResultsResponse>(url, payload).pipe(
      catchError(error => this.httpError.handleError(error)));
  }


  static populateCardDeck(respDeck: Card[], style: CardStyle, size: CardSize): Card[] {
    return respDeck.map(card => {
      return new Card(card.id, card.valueId, card.cardName, card.cardSymbol, card.cardSuit, card.cardValue, style, size);
    });
  }
  
  static getHandCards(cards: Card[] | undefined, handSize: number): Card[] {
    let handCards: Card[] = [];
    if (cards === undefined || (cards !== undefined && cards.length < handSize)) { return handCards; }

    for (let i = 0; i < handSize; i++) {
      let tempCard: Card = cards.splice(0, 1)[0];
      handCards.push(tempCard);
    }
    return handCards;
  }

  static mapCardsForResults(cardSet: Card[]): CardSimple[] {
    let rtnCards: CardSimple[] = [];
    if (cardSet) {

      for(let card of cardSet) {
        let tempCard: CardSimple = new CardSimple();
        tempCard.id = card.id;
        tempCard.valueId = card.valueId;
        tempCard.cardName = card.cardName;
        tempCard.cardSuit = card.cardSuit;
        tempCard.cardSymbol = card.cardSymbol;
        tempCard.cardValue = card.cardValue;

        rtnCards.push(tempCard);
      }
    }
    return rtnCards;
  }

}
