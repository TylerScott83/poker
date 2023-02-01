import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameTableComponent } from "./game-table/game-table.component";


const childRoutes: Routes = [
  { path: '', component: GameTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class GameTableRoutingModule {}