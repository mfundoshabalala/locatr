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
    { label: 'Drivers', icon: '🚚', link: '#' },
    { label: 'Route Planning', icon: '🛣️', link: '#' },
    { label: 'Maps', icon: '🌐', link: '#' },
    { label: 'Live Tracking', icon: '📍', link: '#' },
    { label: 'Schedules', icon: '📅', link: '#' },
    { label: 'Alerts', icon: '🔔', link: '#' },
    { label: 'Settings', icon: '⚙️', link: '#' }
  ];
}
