import { Injectable } from '@angular/core';

import { AbstractService } from '@profolio/core';
import { DepotInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class DepotService extends AbstractService<DepotInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'depot';
}
