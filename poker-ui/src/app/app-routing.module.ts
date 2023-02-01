import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { WhoAreYouComponent } from "./components/who-are-you/who-are-you.component";
import { SessionGuardService } from "./guards/session.guard";


const routes: Routes = [
  { path: '', redirectTo: 'who-are-you', pathMatch: 'full'},
  { path: 'who-are-you', component: WhoAreYouComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [SessionGuardService] },
  { 
    path: 'game-time', canActivate: [SessionGuardService],
    loadChildren: () => import('./lazy-components/new-game/game-table.module').then(m => m.GameTableModule)
  },
  {
    path: 'themes', canActivate: [SessionGuardService],
    loadChildren: () => import('./lazy-components/theme-selector/theme-selector.module').then(m => m.ThemeSelectorModule)
  },
  {
    path: 'card-demo',
    loadChildren: () => import('./lazy-components/card-demo/card-demo.module').then(m => m.CardDemoModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}