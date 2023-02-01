import { DashboardItemModel } from "src/app/models/dashboard-item.model";

export const DASHBOARD_ITEMS: DashboardItemModel[] = [
  {
    name: 'New Game',
    button: 'blue',
    route: '/game-time'
  },
  {
    name: 'Pick Theme',
    button: 'red',
    route: '/themes'
  }
];