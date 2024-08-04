import { Route } from '@angular/router';
import { DashboardLayoutComponent } from '../layout';
import { authGuard } from '../guards/auth.guard';
import { clientResolver, industryResolver } from '../resolvers';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('../pages').then((m) => m.LandingPageComponent),
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    data: {
      title: 'Dashboard',
      subtitle: 'Overview of your route planning activities.',
      searchType: 'none',
    },
    children: [
      {
        path: 'client',
        loadComponent: () => import('@profolio/frontend/pages/client-management').then((m) => m.ClientManagementComponent),
        resolve: { clients: clientResolver, industry: industryResolver },
        data: {
          title: 'Client Management',
          entityName: 'client',
          subtitle: 'Manage and track client information and locations.',
          searchType: 'list',
        },
      },
      {
        path: 'driver',
        loadComponent: () => import('../pages').then((m) => m.DriverManagementComponent),
        data: {
          title: 'Driver Management',
          subtitle: 'Organize and monitor your drivers.',
          searchType: 'list',
        },
      },
      {
        path: 'vehicle',
        loadComponent: () => import('../pages').then((m) => m.VehicleManagementComponent),
        data: {
          title: 'Vehicle Management',
          subtitle: 'Keep your fleet information up-to-date.',
          searchType: 'list',
        },
      },
      {
        path: 'trip',
        loadComponent: () => import('../pages').then((m) => m.TripManagementComponent),
        data: {
          title: 'Trip Management',
          subtitle: 'Schedule and oversee your trips.',
          searchType: 'list',
        },
      },
      {
        path: 'route',
        resolve: { clients: clientResolver },
        loadComponent: () => import('../pages').then((m) => m.RoutePlanningComponent),
        data: {
          title: 'Route Planning',
          subtitle: 'Plan and optimize routes for efficiency.',
          searchType: 'address',
        },
      },
      {
        path: 'routing',
        loadComponent: () => import('../pages').then((m) => m.RoutingComponent),
        data: {
          title: 'Routing',
          subtitle: 'Manage and adjust route details.',
          searchType: 'address',
        },
      },
      {
        path: 'settings',
        loadComponent: () => import('../pages').then((m) => m.SettingsManagementComponent),
        data: {
          title: 'Settings Management',
          subtitle: 'Configure your application settings.',
          searchType: 'none',
        },
      },
      {
        path: 'support',
        loadComponent: () => import('../pages').then((m) => m.SupportManagementComponent),
        data: {
          title: 'Support Management',
          subtitle: 'Handle support requests and issues.',
          searchType: 'none',
        },
      },
    ],
  },
  {
    path: 'auth/login',
    loadComponent: () => import('../pages').then((m) => m.LoginComponent),
  },
  {
    path: 'auth/register',
    loadComponent: () => import('../pages').then((m) => m.RegisterComponent),
  },
  {
    path: 'auth/logout',
    loadComponent: () => import('../pages').then((m) => m.LogoutComponent),
  },
  {
    path: 'error',
    loadComponent: () => import('../pages').then((m) => m.ErrorComponent),
    data: { errorMessage: 'An unexpected error occurred. Please try again later.' },
  },
  {
    path: '**',
    loadComponent: () => import('../pages').then((m) => m.ErrorComponent),
    data: { errorMessage: 'Page not found. Please check the URL and try again.' },
  },
];
