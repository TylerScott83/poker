import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environment/environment';
import { HttpErrorHandler } from '../core/http-error.handler';
import { SessionDataService } from '../core/session-data.service';
import { SessionData } from '../models/session-data.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private http: HttpClient,
    private httpError: HttpErrorHandler,
    private sessionDataService: SessionDataService
  ) { }

  createSession(sessionData: SessionData): Observable<any> {
    const url = `${environment.service.pokerURL}/v1/initializeSession`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<SessionData>(url, sessionData, httpOptions).pipe(
      map((resp: SessionData) => {
        if (resp) {
          this.sessionDataService.setSession(resp);
          return true;
        }
        return false;
      })
      , catchError(error => this.httpError.handleError(error))
    );
  }

  checkSession(): Observable<boolean | any> {
    const url = `${environment.service.pokerURL}/v1/check-session`;
    const sessionData = this.sessionDataService.getSession();
    
    return this.http.post<boolean>(url, sessionData).pipe(
      catchError(error => this.httpError.handleError(error)));
  }

}
