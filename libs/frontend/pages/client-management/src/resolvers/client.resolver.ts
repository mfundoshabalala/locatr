import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ClientInterface } from '@profolio/interfaces';
import { ClientService } from '../services/client.service';

@Injectable({
  providedIn: 'root',
})
export class ClientResolver implements Resolve<Promise<ClientInterface[]>> {
  constructor(private clientService: ClientService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ClientInterface[]> {
    return this.clientService.getAll();
  }
}
