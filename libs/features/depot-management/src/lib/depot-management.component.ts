import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotListComponent } from './components/depot-list/depot-list.component';
import { DepotFormComponent } from './components/depot-form/depot-form.component';

import { DepotInterface } from '@profolio/interfaces';
import { DepotService } from './services/depot.service';
import { AbstractDashboardComponent } from '@profolio/core';

@Component({
  selector: 'lib-depot-management',
  standalone: true,
  imports: [CommonModule, DepotListComponent],
  template: `
    <lib-depot-list
      [entities]="entityList()"
      (entityUpdated)="onEntityUpdate($event)"
      (entitySelected)="onEntityRead($event)"
      (entityDeleted)="onEntityDelete($event)">
    </lib-depot-list>
  `,
})
export class DepotManagementComponent extends AbstractDashboardComponent<DepotInterface> {
  protected readonly service = inject(DepotService);
  protected override entityName = 'depot';
  protected readonly listComponent = DepotListComponent;
  protected readonly formComponent = DepotFormComponent;
}
