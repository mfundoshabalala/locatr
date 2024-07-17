import { Route } from '@angular/router';
import { DashboardLayoutComponent } from '../layout';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@profolio/frontend/maps').then((m) => m.MapDisplayComponent),
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'client',
        title: 'Client Management',
        loadComponent: () => import('../pages').then((m) => m.ClientManagementComponent),
      },
      {
        path: 'driver',
        title: 'Driver Management',
        loadComponent: () => import('../pages').then((m) => m.DriverManagementComponent),
      },
      {
        path: 'vehicle',
        title: 'Vehicle Management',
        loadComponent: () => import('../pages').then((m) => m.VehicleManagementComponent),
      },
      {
        path: 'trip',
        title: 'Trip Management',
        loadComponent: () => import('../pages').then((m) => m.TripManagementComponent),
      },
      {
        path: 'route',
        title: 'Route Planning',
        loadComponent: () => import('../pages').then((m) => m.RoutePlanningComponent),
      },
      {
        path: 'routing',
        title: 'Routing',
        loadComponent: () => import('../pages').then((m) => m.RoutingComponent),
      },
      {
        path: 'settings',
        title: 'Settings Management',
        loadComponent: () => import('../pages').then((m) => m.SettingsManagementComponent),
      },
      {
        path: 'support',
        title: 'Support Management',
        loadComponent: () => import('../pages').then((m) => m.SupportManagementComponent),
      }
    ],
  }
];
