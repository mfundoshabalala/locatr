import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { VehicleListComponent } from '@entity/list';
import { VehicleFormComponent } from '@entity/form';
import { VehicleInterface } from '@profolio/interfaces';
import { VehicleService } from '@profolio/frontend/services';
import { AbstractDashboardComponent } from '@pages/abstract-dashboard';

@Component({
  selector: 'lib-vehicle-management',
  standalone: true,
  imports: [CommonModule, VehicleListComponent],
  template: `
    <lib-vehicle-list></lib-vehicle-list>
  `,
  styleUrl: './vehicle-management.component.css',
})
export class VehicleManagementComponent extends AbstractDashboardComponent<VehicleInterface> {
  protected readonly service = inject(VehicleService);
  protected override entityName = 'vehicle';
  protected readonly listComponent = VehicleListComponent;
  protected readonly formComponent = VehicleFormComponent;
}
