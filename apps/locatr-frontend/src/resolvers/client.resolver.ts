import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { ClientService } from '../services';

import { ClientInterface } from '@profolio/interfaces';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const clientResolver: ResolveFn<ClientInterface[]> = async (_route, _state) => {
  const clientService = inject(ClientService);
  return await clientService.getClients();
};
