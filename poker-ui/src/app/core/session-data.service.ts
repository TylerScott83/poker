import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment";
import { SessionData } from "../models/session-data.model";


@Injectable({
  providedIn: 'root'
})
export class SessionDataService {
  private static readonly SESSION_DATA: string = 'session_data';

  sessionData: SessionData | null = null;

  constructor() {}

  setSession(data: SessionData): void {
    if (environment.production === false) {
      sessionStorage.setItem(SessionDataService.SESSION_DATA, JSON.stringify(data));
    }
    this.sessionData = data;
  }

  getSession(): SessionData | null {
    if (environment.production === false && this.sessionData == null) {
      let sssd = sessionStorage.getItem(SessionDataService.SESSION_DATA);
      return sssd != null ? JSON.parse(sssd) : null;
    }
    return this.sessionData;
  }

  clearSession(): void {
    if (environment.production === false) {
      sessionStorage.removeItem(SessionDataService.SESSION_DATA);
    }
    this.sessionData = null;
  }

}