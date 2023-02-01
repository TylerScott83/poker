import { NgModule } from "@angular/core";
import { HttpErrorHandler } from "./http-error.handler";
import { SessionDataService } from "./session-data.service";


@NgModule({
  providers: [
    HttpErrorHandler,
    SessionDataService
  ]
})
export class CoreModule {}