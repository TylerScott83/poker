import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { WhoAreYouComponent } from './who-are-you/who-are-you.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedComponentsModule } from "../shared-components/shared-components.module";

const exportedComponents = [
  WhoAreYouComponent,
  DashboardComponent
]

@NgModule({
  declarations: [
    ...exportedComponents,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedComponentsModule
  ],
  exports: [exportedComponents]
})
export class ComponentModule {}