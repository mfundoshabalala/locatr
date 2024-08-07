import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { RouteInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class RouteService extends AbstractService<RouteInterface> {
  protected baseUrl = 'http://localhost:3000/api/route';
}
