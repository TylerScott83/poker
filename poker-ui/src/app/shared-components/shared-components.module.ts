import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SingleCardComponent } from "./single-card/single-card.component";
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const exportedComponents: any[] = [
  SingleCardComponent,
  UnderConstructionComponent
]

@NgModule({
  declarations: [exportedComponents],
  imports: [
    CommonModule
  ],
  exports: [exportedComponents]
})
export class SharedComponentsModule {}