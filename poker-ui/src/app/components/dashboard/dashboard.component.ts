import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DashboardItemModel } from 'src/app/models/dashboard-item.model';
import { DASHBOARD_ITEMS } from './DashboardItems.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  dashboardItems: DashboardItemModel[] = DASHBOARD_ITEMS;

  constructor(
    private title: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`Ace High! - Dashboard`);
  }

  navigateTo(event: any): void {
    this.router.navigate([event]);
  }

}
