import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotListComponent } from '@entity/list';
import { DepotFormComponent } from '@entity/form';
import { AbstractDashboardComponent } from '@pages/abstract-dashboard';
import { DepotService } from '@profolio/frontend/services';
import { DepotInterface } from '@profolio/interfaces';

@Component({
  selector: 'lib-depot-management',
  standalone: true,
  imports: [CommonModule, DepotListComponent],
  template: `
    <lib-depot-list
      (entityUpdated)="onEntityUpdate($event)"
      (entitySelected)="onEntitySelect($event)"
      (entityDeleted)="onEntityDelete($event)">
    </lib-depot-list>
  `,
  styleUrl: './depot-management.component.css',
})
export class DepotManagementComponent extends AbstractDashboardComponent<DepotInterface> {
  protected readonly service = inject(DepotService);
  protected override entityName = 'depot';
  protected readonly listComponent = DepotListComponent;
  protected readonly formComponent = DepotFormComponent;
}

