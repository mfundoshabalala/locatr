import { Injectable } from '@angular/core';

import { AbstractService } from '@profolio/core';
import { TripInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class TripService extends AbstractService<TripInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'trip';
}
