import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { ClientInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class ClientService extends AbstractService<ClientInterface> {
  protected baseUrl = 'http://localhost:3000/api/client';
}
