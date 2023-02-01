import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardDemoComponent } from "./card-demo.component";


const childRoutes: Routes = [
  {
    path: '', component: CardDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class CardDemoRoutingModule {}