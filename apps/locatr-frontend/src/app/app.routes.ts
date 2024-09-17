import { DashboardLayoutComponent } from '../layout';
import { Route } from '@angular/router';
import { authGuard } from '../guards/auth.guard';

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
        path: 'overview',
        loadComponent: () => import('@features/dashboard-overview').then((m) => m.DashboardOverviewComponent),
        data: {
          title: 'Dashboard',
          subtitle: 'Overview of your route planning activities.',
          searchType: 'none',
        },
      },
      {
        path: 'client',
        loadComponent: () => import('@features/client-management').then((m) => m.ClientManagementComponent),
        data: {
          entityName: 'client',
          title: 'Client Management',
          subtitle: 'Manage your client information.',
          searchType: 'list',
        },
      },
      {
        path: 'employee',
        loadComponent: () => import('@features/employee-management').then((m) => m.EmployeeManagementComponent),
        data: {
          entityName: 'user',
          title: 'Employee Management',
          subtitle: 'Organize and monitor your employees.',
          searchType: 'list',
        },
      },
      {
        path: 'depot',
        loadComponent: () => import('@features/depot-management').then((m) => m.DepotManagementComponent),
        data: {
          title: 'Depot Management',
          entityName: 'depot',
          subtitle: 'Manage your depot locations.',
          searchType: 'list',
        },
      },
      {
        path: 'vehicle',
        loadComponent: () => import('@features/vehicle-management').then((m) => m.VehicleManagementComponent),
        data: {
          title: 'Vehicle Management',
          entityName: 'vehicle',
          subtitle: 'Keep your fleet information up-to-date.',
          searchType: 'list',
        },
      },
      {
        path: 'order',
        loadComponent: () => import('@features/order-management').then((m) => m.OrderManagementComponent),
        data: {
          title: 'Order Management',
          entityName: 'order',
          subtitle: 'Manage and track your orders.',
          searchType: 'list',
        },
      },
      {
        path: 'route',
        loadComponent: () => import('@features/route-management').then((m) => m.RouteManagementComponent),
        data: {
          title: 'Route Planning',
          entityName: 'route',
          subtitle: 'Plan and optimize routes for efficiency.',
          searchType: 'address',
        },
      },
      {
        path: 'routing',
        loadComponent: () => import('@features/route-optimisation').then((m) => m.RouteOptimisationComponent),
        data: {
          title: 'Route Optimization',
          subtitle: 'Manage and adjust route details.',
          searchType: 'address',
        },
      },
      {
        path: 'notification',
        loadComponent: () => import('@features/notification-management').then((m) => m.NotificationManagementComponent),
        data: {
          title: 'Notification Management',
          subtitle: 'Send and manage notifications.',
          searchType: 'none',
        },
      },
      {
        path: 'settings',
        loadComponent: () => import('@features/settings-management').then((m) => m.SettingsManagementComponent),
        data: {
          title: 'Settings Management',
          subtitle: 'Configure your application settings.',
          searchType: 'none',
        },
      },
      {
        path: 'support',
        loadComponent: () => import('@features/support-management').then((m) => m.SupportManagementComponent),
        data: {
          title: 'Support Management',
          subtitle: 'Handle support requests and issues.',
          searchType: 'none',
        },
      },
    ],
  },
  {
    path: 'auth/profile',
    loadComponent: () => import('../pages').then((m) => m.ProfileComponent),
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
    path: 'auth/forgot-password',
    loadComponent: () => import('../pages').then((m) => m.ForgotPasswordComponent),
  },
  {
    path: 'auth/reset-password',
    loadComponent: () => import('../pages').then((m) => m.ResetPasswordComponent),
  },
  {
    path: 'auth/verify-user',
    loadComponent: () => import('../pages').then((m) => m.VerifyUserComponent),
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
