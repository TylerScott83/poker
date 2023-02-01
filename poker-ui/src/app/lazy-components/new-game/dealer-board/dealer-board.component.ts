import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-dealer-board',
  templateUrl: './dealer-board.component.html',
  styleUrls: ['./dealer-board.component.scss']
})
export class DealerBoardComponent implements OnInit {
  @Output() emitButtonEvent = new EventEmitter<string>();
  @Input() cards: Card[] | undefined = undefined;
  @Input() deckCountTotal: number = 0;
  @Input() deckCount: number = 0;

  card: Card | undefined = new Card();

  constructor() {}

  ngOnInit(): void {}

  buttonEmit(value: string): void {
    this.emitButtonEvent.emit(value);
  }

}
