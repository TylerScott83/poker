import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SessionData } from 'src/app/models/session-data.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrls: ['./who-are-you.component.scss']
})
export class WhoAreYouComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  form: FormGroup = new FormGroup({
    userName: new FormControl('')
  })

  constructor(
    private title: Title,
    private router: Router,
    private formBuilder: FormBuilder,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`Ace High! - Tell us about yourself!`);
    this.form = this.setupForm();
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.unsubscribe();
  }

  private setupForm(): FormGroup {
    return this.formBuilder.group(
      {userName: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(/^[a-zA-Z0-9_-]{3,30}$/)
      ]]}
    );
  }

  submit(form: FormGroup): void {
    if (form.valid) {
      const sessionData = new SessionData();
      sessionData.userName = form.get('userName')?.value;
      this.sessionService.createSession(sessionData)
        .pipe(takeUntil(this.destroy$))
        .subscribe((resp) => {
          if (resp === true) {
            this.router.navigate(['/dashboard']);
          }
      })
    }
  }

  get f(): any {
    return this.form.controls;
  }

}
