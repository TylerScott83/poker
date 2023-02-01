import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { CoreModule } from './core/core.module';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    CoreModule
  ],
  providers: [
    Title,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
