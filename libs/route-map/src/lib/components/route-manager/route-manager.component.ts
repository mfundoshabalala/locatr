import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client, LatLng } from '@googlemaps/google-maps-services-js';

@Component({
  selector: 'lib-route-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-manager.component.html',
  styleUrl: './route-manager.component.css',
})
export class RouteManagerComponent {
  routes = input.required<MarkerInterface[]>();

  origin!: LatLng;
  destination!: LatLng;
  waypoints: LatLng[] = [];
  client = new Client({})

  constructor() {
    effect(() => {
      this.waypoints = this.routes().map((route: MarkerInterface) => route.position);
      this.origin = this.waypoints.shift() as LatLng; // TODO: the starting point must be in the depot that is assigned to the driver
      this.destination = this.waypoints.pop() as LatLng; // TODO: the ending point must be in the depot that is assigned to the driver
    });
  }
}

export interface MarkerInterface {
  name: string;
  address: string;
  position: LatLng;
  driverID?: string;
}
