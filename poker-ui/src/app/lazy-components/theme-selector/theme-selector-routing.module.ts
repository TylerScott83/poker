import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemeSelectorComponent } from "./theme-selector.component";


const childRoutes: Routes = [
  { path: '', component: ThemeSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ThemeSelectorRoutingModule {}