import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';

import { GoogleMapComponent } from './components/google-map.component';

@Component({
  selector: 'lib-route-map',
  standalone: true,
  imports: [CommonModule, GoogleMapComponent],
  template: `
    <div class="route-map-container">
      <lib-google-map [id]="mapId" [routeData]="routes()"></lib-google-map>
    </div>
  `,
  styles: [`
  :host {
    display: block;
    height: 100%;
  }
  .route-map-container {
    height: 100%;
  }
  `,],
})
export class RouteMapComponent {
  mapId = 'route-map';
  routes = input.required<any>();

  constructor() {
    effect(() => {
      console.log('RouteMapComponent', this.routes());
    });
  }
}
