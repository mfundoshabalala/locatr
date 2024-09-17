import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AuthenticationService } from '@profolio/frontend/services';
import { CommonModule } from '@angular/common';

interface SidebarItem {
  icon: string;
  route: string;
  label: string;
  roles: string[]; // Roles that can access this item
}

interface MenuItem {
  label: string;
  path: string;
  icon: string;
  roles: string[];
}

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css',
})
export class DashboardSidebarComponent implements OnInit {
  userRole!: string;
  sidebarItems: SidebarItem[] = [
    // Common Sections
    { icon: 'dashboard', route: '/dashboard', label: 'Dashboard', roles: ['admin', 'dispatcher', 'driver'] },
    { icon: 'person', route: 'auth/profile', label: 'Profile', roles: ['admin', 'dispatcher', 'driver'] },
    {
      icon: 'notifications',
      route: '/notifications',
      label: 'Notifications',
      roles: ['admin', 'dispatcher', 'driver'],
    },

    // Admin Sections
    { icon: 'group', route: '/users', label: 'User Management', roles: ['admin'] },
    { icon: 'directions_car', route: '/vehicles', label: 'Vehicle Management', roles: ['admin'] },
    { icon: 'bar_chart', route: '/analytics', label: 'Business Analytics', roles: ['admin'] },
    { icon: 'account_balance', route: '/accounts', label: 'Account Management', roles: ['admin'] },
    { icon: 'business', route: '/clients', label: 'Client Management', roles: ['admin'] },

    // Dispatcher Sections
    { icon: 'assignment', route: '/orders', label: 'Orders', roles: ['dispatcher'] },
    { icon: 'map', route: '/routes', label: 'Route Planning', roles: ['dispatcher'] },
    { icon: 'location_on', route: '/drivers', label: 'Driver Tracking', roles: ['dispatcher'] },
    { icon: 'optimize', route: '/optimize', label: 'Route Optimization', roles: ['dispatcher'] },

    // Driver Sections
    { icon: 'map', route: '/my-routes', label: 'My Routes', roles: ['driver'] },
    { icon: 'assignment', route: '/my-orders', label: 'My Assignments', roles: ['driver'] },
  ];

  //NOTE: icons are from https://www.svgrepo.com/public
  menuItems: MenuItem[] = [
    { label: 'Overview', path: '/dashboard/overview', icon: '', roles: ['admin', 'dispatcher', 'driver'] },
    { label: 'Depot Management', path: '/dashboard/depot', icon: '', roles: ['admin'] },
    { label: 'Client Management', path: '/dashboard/client', icon: '', roles: ['admin'] },
    { label: 'Order Management', path: '/dashboard/order', icon: '', roles: ['admin', 'dispatcher'] },
    { label: 'User Management', path: '/dashboard/employee', icon: '', roles: ['admin'] },
    { label: 'Vehicle Management', path: '/dashboard/vehicle', icon: '', roles: ['admin'] },
    { label: 'Route Planning', path: '/dashboard/route', icon: '', roles: ['admin', 'dispatcher'] },
    { label: 'Route Optimization', path: '/dashboard/routing', icon: '', roles: ['admin', 'dispatcher'] },
  ];

  public footerItems: MenuItem[] = [
    {
      label: 'Notifications',
      path: '/dashboard/notification',
      icon: '',
      roles: ['admin', 'dispatcher', 'driver'],
    },
    { label: 'Settings', path: '/dashboard/settings', icon: '', roles: ['admin'] },
    {
      label: 'Support',
      path: '/dashboard/support',
      icon: '',
      roles: ['admin', 'dispatcher', 'driver'],
    },
  ];

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole(); // Implement getUserRole to return the role of the logged-in user
  }

  getFilteredSidebarItems(): SidebarItem[] {
    return this.sidebarItems.filter((item) => item.roles.includes(this.userRole));
  }
}
