import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandler {

  constructor() { }

  public handleError(error: HttpErrorResponse): any {
    let msg: string = '';

    if (error.error instanceof ErrorEvent) {
      msg = `Error: ${error.error.message}`;
    } else {
      msg = this.serverErrorMessage(error);
    }

    return throwError(() => new Error(msg));
  }

  private serverErrorMessage(error: HttpErrorResponse): string {
    switch(error.status) {
      case 404:
        return `404 - Not found: ${error.message}`;
      case 401:
      case 403:
        return `Unauthorized Access`;
      case 500:
        return `500 - Internal error: ${error.message}`;
      default:
        return `Unknown service error happened: ${error.message}`;
    }

  }

  
}