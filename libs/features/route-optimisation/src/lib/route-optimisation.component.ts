/* eslint-disable @typescript-eslint/no-explicit-any */
import * as _ from 'lodash';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteMapComponent, RouteManagerComponent } from '@profolio/route-map';
import { RouteService } from './services/route.service';
import { ToasterService } from '@toaster';
import { RouteInterface } from '@profolio/interfaces';
import { LatLng } from '@googlemaps/google-maps-services-js';

@Component({
  selector: 'lib-route-optimisation',
  standalone: true,
  imports: [CommonModule, RouteMapComponent, RouteManagerComponent],
  template: `
    <section class="flex h-full gap-x-4">
      <lib-route-map [routes]="markers" class="flex-1" />
      <lib-route-manager [routes]="markers" />
    </section>
  `,
  styleUrl: './route-optimisation.component.css',
})
export class RouteOptimisationComponent implements OnInit {
  private routeService = inject(RouteService);
  private toasterService = inject(ToasterService);
  routes = signal<RouteInterface[]>([], { equal: _.isEqual });
  markers: MarkerInterface[] = [];

  constructor() {
    effect(() => {
      const filteredRoutes = this.filterInvalidRoutes(this.routes());
      const mappedMarkers = this.mapRouteToMarker(filteredRoutes);
      this.markers = mappedMarkers;
    });
  }

  async ngOnInit(): Promise<void> {
    console.log('ngOnInit');
    try {
      const data = await this.routeService.getAll();
      this.routes.set(data);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  filterInvalidRoutes(routes: RouteInterface[]): RouteInterface[] {
    return routes.filter((route) => route.order && route.order.site && route.order.customer);
    // return routes.filter((route) => route.order && route.order.site);
  }

  mapRouteToMarker(routes: RouteInterface[]): MarkerInterface[] {
    return routes.map((route) => ({
      position: { lat: +route.order.site.latitude, lng: +route.order.site.longitude },
      address: route.order.site.address,
      name: route.order.customer.name,
      driverID: route.driver.id,
    }));
  }
}

interface MarkerInterface {
  name: string;
  address: string;
  position: LatLng;
  driverID?: string;
}
