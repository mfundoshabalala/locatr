import { Route } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { DashboardLayoutComponent } from '../layout';

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
        path: 'employee',
        loadComponent: () => import('@pages/employee-management').then((m) => m.EmployeeManagementComponent),
        data: {
          entityName: 'user',
          title: 'Employee Management',
          subtitle: 'Organize and monitor your employees.',
          searchType: 'list',
        },
      },
      {
        path: 'vehicle',
        loadComponent: () => import('@pages/vehicle-management').then((m) => m.VehicleManagementComponent),
        data: {
          title: 'Vehicle Management',
          entityName: 'vehicle',
          subtitle: 'Keep your fleet information up-to-date.',
          searchType: 'list',
        },
      },
      {
        path: 'order',
        loadComponent: () => import('@pages/order-management').then((m) => m.OrderManagementComponent),
        data: {
          title: 'Order Management',
          entityName: 'order',
          subtitle: 'Manage and track your orders.',
          searchType: 'list',
        },
      },
      {
        path: 'route',
        loadComponent: () => import('@pages/route-management').then((m) => m.RouteManagementComponent),
        data: {
          title: 'Route Planning',
          entityName: 'route',
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
