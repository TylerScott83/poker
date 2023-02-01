import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-statistic',
  templateUrl: './game-statistic.component.html',
  styleUrls: ['./game-statistic.component.scss']
})
export class GameStatisticComponent implements OnInit {
  @Input() deckCountTotal: number = 0;
  @Input() deckCount: number = 0;

  constructor() {}

  ngOnInit(): void {}

}
