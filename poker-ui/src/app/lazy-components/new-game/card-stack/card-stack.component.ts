import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.scss']
})
export class CardStackComponent implements OnInit {
  @Output() emitButtonEvent = new EventEmitter<string>();
  
  card: Card | undefined = undefined;

  constructor() {}

  ngOnInit(): void {
    this.card = new Card();
  }

  buttonEmit(value: string): void {
    this.emitButtonEvent.emit(value);
  }
}
