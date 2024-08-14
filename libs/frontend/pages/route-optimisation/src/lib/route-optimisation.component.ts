import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteMapComponent, RouteManagerComponent } from '@profolio/route-map';

@Component({
  selector: 'lib-route-optimisation',
  standalone: true,
  imports: [CommonModule, RouteMapComponent, RouteManagerComponent],
  template: `
    <section class="flex h-full gap-x-4">
      <lib-route-map class="flex-1" />
      <lib-route-manager />
    </section>
  `,
  styleUrl: './route-optimisation.component.css',
})
export class RouteOptimisationComponent {}
