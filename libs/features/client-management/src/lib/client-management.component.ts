import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInterface } from '@profolio/interfaces';

import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientService } from './services/client.service';
import { AbstractDashboardComponent } from '@profolio/core';

@Component({
  selector: 'lib-client-management',
  standalone: true,
  imports: [CommonModule, ClientListComponent, ClientFormComponent],
  template: `
    <lib-client-list
      [entities]="entityList()"
      (entityUpdated)="onEntityUpdate($event)"
      (entitySelected)="onEntityRead($event)"
      (entityDeleted)="onEntityDelete($event)">
    </lib-client-list>
    <!-- <lib-client-form></lib-client-form> -->
  `,
})
export class ClientManagementComponent extends AbstractDashboardComponent<ClientInterface> {
  protected override service = inject(ClientService);
  protected override entityName = 'client';
  protected override listComponent = ClientListComponent;
  protected override formComponent = ClientFormComponent;
}
