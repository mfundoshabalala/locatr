import { Route } from '@angular/router';
import { DashboardLayoutComponent } from '../layout';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@profolio/frontend/maps').then((m) => m.MapDisplayComponent),
    data: { title: 'Map Display', subtitle: 'View and interact with your maps.' },
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    data: { title: 'Dashboard', subtitle: 'Overview of your route planning activities.' },
    children: [
      {
        path: 'client',
        loadComponent: () => import('../pages').then((m) => m.ClientManagementComponent),
        data: { title: 'Client Management', subtitle: 'Manage and track client information and locations.' },
      },
      {
        path: 'driver',
        loadComponent: () => import('../pages').then((m) => m.DriverManagementComponent),
        data: { title: 'Driver Management', subtitle: 'Organize and monitor your drivers.' },
      },
      {
        path: 'vehicle',
        loadComponent: () => import('../pages').then((m) => m.VehicleManagementComponent),
        data: { title: 'Vehicle Management', subtitle: 'Keep your fleet information up-to-date.' },
      },
      {
        path: 'trip',
        loadComponent: () => import('../pages').then((m) => m.TripManagementComponent),
        data: { title: 'Trip Management', subtitle: 'Schedule and oversee your trips.' },
      },
      {
        path: 'route',
        loadComponent: () => import('../pages').then((m) => m.RoutePlanningComponent),
        data: { title: 'Route Planning', subtitle: 'Plan and optimize routes for efficiency.' },
      },
      {
        path: 'routing',
        loadComponent: () => import('../pages').then((m) => m.RoutingComponent),
        data: { title: 'Routing', subtitle: 'Manage and adjust route details.' },
      },
      {
        path: 'settings',
        loadComponent: () => import('../pages').then((m) => m.SettingsManagementComponent),
        data: { title: 'Settings Management', subtitle: 'Configure your application settings.' },
      },
      {
        path: 'support',
        loadComponent: () => import('../pages').then((m) => m.SupportManagementComponent),
        data: { title: 'Support Management', subtitle: 'Handle support requests and issues.' },
      },
    ],
  },
];
