import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInterface } from '@profolio/interfaces';
import { AbstractDashboardComponent } from '@pages/abstract-dashboard';
import { ClientService } from '@profolio/frontend/services';
import { ClientListComponent } from '@entity/list';
import { ClientFormComponent } from '@entity/form';

@Component({
  selector: 'lib-client-management',
  standalone: true,
  imports: [CommonModule, ClientListComponent, ClientFormComponent],
  template: `
    <lib-client-list
      (entityUpdated)="onEntityUpdate($event)"
      (entitySelected)="onEntitySelect($event)"
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
  