import { Injectable } from '@angular/core';

import { AbstractService } from '@profolio/core';
import { VehicleInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class VehicleService extends AbstractService<VehicleInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'vehicle';
}
