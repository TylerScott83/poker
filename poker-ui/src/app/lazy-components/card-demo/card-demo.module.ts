import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "src/app/shared-components/shared-components.module";
import { CardDemoRoutingModule } from "./card-demo-routing.module";
import { CardDemoComponent } from "./card-demo.component";

export const exportedComponents = [
  CardDemoComponent
];
@NgModule({
  declarations: [exportedComponents],
  imports: [
    CommonModule,
    CardDemoRoutingModule,
    SharedComponentsModule
  ],
  exports: [exportedComponents],
  
})
export class CardDemoModule {}