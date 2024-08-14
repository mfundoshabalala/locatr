import { CommonModule } from '@angular/common';
import { Component, signal, OnInit, inject, effect } from '@angular/core';

import { RouteInterface } from '@profolio/interfaces';
import { GoogleMapComponent } from './google-map.component';
import { RouteService } from '@features/route-management';

@Component({
  selector: 'lib-route-map',
  standalone: true,
  imports: [CommonModule, GoogleMapComponent],
  template: `
    <div class="route-map-container">
      <lib-google-map [id]="mapId" [routeData]="routes()"></lib-google-map>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
      .route-map-container {
        height: 100%;
      }
    `,
  ],
})
export class RouteMapComponent implements OnInit {
  mapId = 'route-map';
  routes = signal<any>([]);
  routeData = signal<RouteInterface[]>([]);

  private routeService = inject(RouteService);

  constructor() {
    effect(() => {
      const transformedRoutes = this.routeService.transformRouteData(this.routeData());
      this.routes.set(transformedRoutes );
    }, { allowSignalWrites: true });
  }

  async ngOnInit(): Promise<void> {
    const routes = await this.routeService.getAll();
    this.routeData.set(routes);
  }
}
