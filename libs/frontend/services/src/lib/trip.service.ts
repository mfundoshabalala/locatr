import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { TripInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class TripService extends AbstractService<TripInterface> {
  protected baseUrl = 'http://localhost:3000/api/trip';
}
