import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css',
})
export class DashboardSidebarComponent {
  // NOTE: icons are from https://www.svgrepo.com/
  public menuItems: MenuItem[] = [
    { label: 'Dashboard', path: '/dashboard', icon: 'dashboard.svg' },
    { label: 'Clients', path: '/dashboard/client', icon: 'company.svg' },
    { label: 'Team', path: '/dashboard/driver', icon: 'team.svg' },
    { label: 'Vehicles', path: '/dashboard/vehicle', icon: 'truck-weight-max-loading.svg' },
    { label: 'Trips', path: '/dashboard/trip', icon: 'trip.svg' },
    { label: 'Planning', path: '/dashboard/route', icon: 'calendar.svg' },
    { label: 'Routing', path: '/dashboard/routing', icon: 'route-start.svg' },
  ];

  public footerItems: MenuItem[] = [
    { label: 'Settings', path: '/dashboard/settings', icon: 'settings.svg' },
    { label: 'Support', path: '/dashboard/support', icon: 'headset-support.svg' },
  ];
}

interface MenuItem {
  label: string;
  path: string;
  icon?: string;
}
