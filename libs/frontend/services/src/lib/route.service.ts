import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { RouteInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class RouteService extends AbstractService<RouteInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'route';

  transformRouteData(routes: RouteInterface[]): any[] {
    return routes
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
  }
}
