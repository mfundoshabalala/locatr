import { ResolveFn } from '@angular/router';
import { ClientInterface } from '@profolio/interfaces';
import { Injector, inject } from '@angular/core';

export const clientResolver: ResolveFn<ClientInterface[]> = async (_route, _state) => {
  // Dynamically import the ClientService and the module it belongs to
  const { ClientService } = await import('@pages/client-management');

  // Get an instance of the Angular injector
  const injector = inject(Injector);

  // Create an instance of the ClientService
  const clientService = injector.get(ClientService);

  // Use the service to fetch the list of clients
  return await clientService.getAll();
};
