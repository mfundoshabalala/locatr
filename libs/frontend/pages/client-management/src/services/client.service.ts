import { Injectable } from '@angular/core';
import { ClientInterface } from '@profolio/interfaces';
import { AbstractService } from '@profolio/frontend/pages/abstract-dashboard';

@Injectable({ providedIn: 'root' })
export class ClientService extends AbstractService<ClientInterface> {
  protected baseUrl = 'http://localhost:3000/api/client';
}
