import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteMapComponent } from '@profolio/route-map';

@Component({
  selector: 'lib-route-optimisation',
  standalone: true,
  imports: [CommonModule, RouteMapComponent],
  template: `
    <lib-route-map />
  `,
  styleUrl: './route-optimisation.component.css',
})
export class RouteOptimisationComponent {}
