import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { VehicleInterface } from '@profolio/interfaces';


@Injectable({ providedIn: 'root' })
export class VehicleService extends AbstractService<VehicleInterface> {
  protected baseUrl = 'http://localhost:3000/api/vehicle';
}
