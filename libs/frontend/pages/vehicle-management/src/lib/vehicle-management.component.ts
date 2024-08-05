import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { VehicleInterface } from '@profolio/interfaces';
import { VehicleService } from '@profolio/frontend/services';
import { AbstractDashboardComponent } from '@pages/abstract-dashboard';
import { VehicleFormComponent } from '../components/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from '../components/vehicle-list/vehicle-list.component';

@Component({
  selector: 'lib-vehicle-management',
  standalone: true,
  imports: [CommonModule, VehicleListComponent],
  template: `
    <lib-vehicle-list
      [list]="entityList()"
      (onEdit)="onEdit($event)"
      (onDelete)="onDelete($event)">
    </lib-vehicle-list>
  `,
  styleUrl: './vehicle-management.component.css',
})
export class VehicleManagementComponent extends AbstractDashboardComponent<VehicleInterface> {
  protected readonly service = inject(VehicleService);
  protected readonly listComponent = VehicleListComponent;
  protected readonly formComponent = VehicleFormComponent;
}
