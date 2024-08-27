import { Component, inject } from '@angular/core';

import { AbstractListComponent } from '@profolio/core';
import { CommonModule } from '@angular/common';
import { VehicleInterface } from '@profolio/interfaces';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'lib-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent extends AbstractListComponent<VehicleInterface> {
  protected service = inject(VehicleService);
}
