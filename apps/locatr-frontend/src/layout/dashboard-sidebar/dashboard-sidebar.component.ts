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
  public menuItems: MenuItem[] = [
    { label: 'Dashboard', path: '/dashboard', icon: 'dashboard-svgrepo-com.svg' },
    { label: 'Clients', path: '/dashboard/client', icon: 'company-svgrepo-com.svg' },
    { label: 'Drivers', path: '/dashboard/driver', icon: 'truck-driver-svgrepo-com.svg' },
    { label: 'Vehicles', path: '/dashboard/vehicle', icon: 'vehicle-wheel-svgrepo-com.svg' },
    { label: 'Trips', path: '/dashboard/trip', icon: 'trip-svgrepo-com.svg' },
    { label: 'Planning', path: '/dashboard/route', icon: 'calendar-svgrepo-com.svg' },
    { label: 'Routing', path: '/dashboard/routing', icon: 'route-start-svgrepo-com.svg' },
  ];

  public footerItems: MenuItem[] = [
    { label: 'Settings', path: '/dashboard/settings', icon: 'settings-svgrepo-com.svg' },
    { label: 'Support', path: '/dashboard/support', icon: 'info-circle-fill-svgrepo-com.svg' },
  ];
}

interface MenuItem {
  label: string;
  path: string;
  icon?: string;
}
