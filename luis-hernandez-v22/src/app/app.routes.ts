import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'watchfaces',
    loadComponent: () =>
      import('./pages/watchfaces/watchfaces.component').then((m) => m.WatchfacesComponent),
  },
  { path: '**', redirectTo: 'home' },
];
