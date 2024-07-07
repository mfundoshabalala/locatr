import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-map-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-sidebar.component.html',
  styleUrl: './map-sidebar.component.css',
})
export class MapSidebarComponent {
  readonly navItems = [
    { label: 'Clients', icon: '👥', link: 'clients' },
    { label: 'Drivers', icon: '🚚', link: '#' },
    { label: 'Route Planning', icon: '🛣️', link: 'maps' },
    { label: 'Maps', icon: '🌐', link: 'maps' },
    { label: 'Live Tracking', icon: '📍', link: '#' },
    { label: 'Schedules', icon: '📅', link: '#' },
    { label: 'Alerts', icon: '🔔', link: '#' },
    { label: 'Settings', icon: '⚙️', link: '#' },
  ];
}
