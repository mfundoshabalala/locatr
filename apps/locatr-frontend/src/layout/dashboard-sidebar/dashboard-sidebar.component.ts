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
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Clients', path: '/dashboard/client' },
    { label: 'Drivers', path: '/dashboard/driver' },
    { label: 'Vehicles', path: '/dashboard/vehicle' },
    { label: 'Trips', path: '/dashboard/trip' },
    { label: 'Planning', path: '/dashboard/route' },
    { label: 'Routing', path: '/dashboard/routing' },
  ];

  public footerItems: MenuItem[] = [
    { label: 'Settings', path: '/dashboard/settings' },
    { label: 'Support', path: '/dashboard/support' },
  ];
}

interface MenuItem {
  label: string;
  path: string;
}
