import { Injectable } from '@angular/core';

import { AbstractService } from '@profolio/core';
import { ClientInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class ClientService extends AbstractService<ClientInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'client';
}
