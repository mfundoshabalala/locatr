import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { VehicleInterface } from '@profolio/interfaces';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleService } from './services/vehicle.service';
import { AbstractDashboardComponent } from '@profolio/core';

@Component({
  selector: 'lib-vehicle-management',
  standalone: true,
  imports: [CommonModule, VehicleListComponent],
  template: ` <lib-vehicle-list></lib-vehicle-list> `,
  styleUrl: './vehicle-management.component.css',
})
export class VehicleManagementComponent extends AbstractDashboardComponent<VehicleInterface> {
  protected readonly service = inject(VehicleService);
  protected override entityName = 'vehicle';
  protected readonly listComponent = VehicleListComponent;
  protected readonly formComponent = VehicleFormComponent;
}
