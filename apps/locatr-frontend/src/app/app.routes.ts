import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'clients',
    loadComponent: () => import('../components/client-list/client-list.component').then((m) => m.ClientListComponent),
  },
  {
    path: 'maps',
    loadComponent: () => import('@profolio/frontend/maps').then((m) => m.MapDisplayComponent),
  },
];
