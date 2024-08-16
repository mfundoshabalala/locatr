import { Injectable } from '@angular/core';
import { AbstractService } from '@profolio/core';
import { RouteInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class RouteService extends AbstractService<RouteInterface> {
  protected override baseUrl: string = process.env['LOCATR_API_URL'] + 'route';
}