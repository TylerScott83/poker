import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { CardSimple } from 'src/app/models/card-simple.model';
import { CardSize, CardStyle } from 'src/app/models/card.enum';
import { Card } from 'src/app/models/card.model';
import { GameResultsResponse } from 'src/app/models/game-results-response';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit, OnDestroy {
  @Input() cardStyle: CardStyle = CardStyle.Default;
  @Input() cardSize: CardSize = CardSize.Small;
  destroy$ = new Subject<void>();

  cards: Card[] | undefined = undefined;
  dealerCards: Card[] | undefined = undefined;
  playerPCCards: Card[] | undefined = undefined;
  playerNPCCards: Card[] | undefined = undefined;

  deckCountTotal: number = 0;
  deckCount: number = 0;

  constructor(
    private title: Title,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`Ace High!`);
    this.getNewDeck();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  getNewDeck(): void {
    this.clearHand();
    this.cardService.getCardDeck()
    .pipe(takeUntil(this.destroy$))
    .subscribe(resp => {
      if (resp) {
        this.deckCountTotal = resp.length;
        this.cards = CardService.populateCardDeck(resp, this.cardStyle, this.cardSize);
        this.populateInPlayCards();
        this.deckCount = this.cards.length;
      }
    })
  }

  buttonEmit(value: string): void {
    if (value === 'new') {
      this.getNewDeck();
    }
    if (value === 'result') {
      if (this.dealerCards && this.playerPCCards && this.playerNPCCards) {
        debugger;
        const pcCards: CardSimple[] = CardService.mapCardsForResults(this.playerPCCards.concat(this.dealerCards));
        const npcCards: CardSimple[] = CardService.mapCardsForResults(this.playerNPCCards.concat(this.dealerCards));
        this.cardService.getResults(pcCards, npcCards)
          .pipe(takeUntil(this.destroy$))
          .subscribe((resp: GameResultsResponse) => {
            debugger;
          });
      }
    }
  }

  populateInPlayCards(): void {
    this.dealerCards = CardService.getHandCards(this.cards, CardService.DEALER_HAND_SIZE);
    this.playerPCCards = CardService.getHandCards(this.cards, CardService.PC_HAND_SIZE);
    this.playerNPCCards = CardService.getHandCards(this.cards, CardService.NPC_HAND_SIZE);
  }

  private clearHand(): void {
    this.deckCount = 0;
    this.deckCountTotal = 0;
    this.dealerCards = [];
    this.playerPCCards = [];
    this.playerNPCCards = [];
  }
}
