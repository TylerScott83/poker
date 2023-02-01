import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameTableRoutingModule } from "./game-table-routing.module";
import { GameTableComponent } from "./game-table/game-table.component";
import { PlayerBoardComponent } from './player-board/player-board.component';
import { DealerBoardComponent } from './dealer-board/dealer-board.component';
import { SharedComponentsModule } from "src/app/shared-components/shared-components.module";
import { CardStackComponent } from './card-stack/card-stack.component';
import { GameStatisticComponent } from './game-statistic/game-statistic.component';
import { CardService } from "src/app/services/card.service";


@NgModule({
  declarations: [
    GameTableComponent,
    PlayerBoardComponent,
    DealerBoardComponent,
    CardStackComponent,
    GameStatisticComponent,
  ],
  imports: [
    CommonModule,
    GameTableRoutingModule,
    SharedComponentsModule
  ],
  providers: [
    CardService
  ]
})
export class GameTableModule {}