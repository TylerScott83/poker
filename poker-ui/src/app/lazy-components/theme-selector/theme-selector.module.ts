import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "src/app/shared-components/shared-components.module";
import { ThemeSelectorRoutingModule } from "./theme-selector-routing.module";
import { ThemeSelectorComponent } from './theme-selector.component';


@NgModule({
  declarations: [
    ThemeSelectorComponent
  ],
  imports: [
    CommonModule,
    ThemeSelectorRoutingModule,
    SharedComponentsModule
  ],
  
})
export class ThemeSelectorModule {}