import { Injectable } from '@angular/core';

import { DepotInterface } from '@profolio/interfaces';
import { AbstractService } from './abstract.service';

@Injectable({ providedIn: 'root' })
export class DepotService extends AbstractService<DepotInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'depot';
}
