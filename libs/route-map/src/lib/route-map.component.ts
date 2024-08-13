import { Component, signal, OnInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteInterface } from '@profolio/interfaces';
import { GoogleMapComponent } from './google-map.component';
import { RouteService } from '@profolio/frontend/services';

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
      const routes = this.routeData()
        .map((route) => {
          if (!route.order['site'] || !route.order['customer']) return undefined;
          return {
            position: {
              lat: +route.order['site'].latitude,
              lng: +route.order['site'].longitude,
            },
            address: route.order['site'].address,
            name: route.order['customer'].name,
          };
        })
        .filter((route) => route?.position.lat && route?.position.lng);
        this.routes.set(routes);
      }, { allowSignalWrites: true });
  }

  async ngOnInit() {
    const routes = await this.routeService.getAll();
    this.routeData.set(routes);
  }
}
