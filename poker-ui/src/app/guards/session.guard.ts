import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, Subject, takeUntil, tap } from "rxjs";
import { SessionService } from "../services/session.service";


@Injectable(
  { providedIn: 'root'}
)
export class SessionGuardService implements CanActivate, OnDestroy {
  destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.unsubscribe();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.sessionService.checkSession().pipe(
      takeUntil(this.destroy$),
      tap(hasSession => {
        if (!hasSession) {
          this.router.navigate(['/who-are-you']);
        }
      })
    )
  }
}