import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.scss']
})
export class PlayerBoardComponent implements OnInit {
  @Input() playerBoard: boolean = false;
  @Input() cards: Card[] | undefined = undefined;

  card: Card | undefined = undefined;

  constructor() {}

  ngOnInit(): void { }

}
