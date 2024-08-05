import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VehicleInterface } from '@profolio/interfaces';

@Component({
  selector: 'lib-vehicle-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent {
  edit = output<VehicleInterface>({ alias: 'onEdit' });
  delete = output<VehicleInterface>({ alias: 'onDelete' });
  update = output<VehicleInterface>({ alias: 'onUpdate' });
  list = input.required<VehicleInterface[]>({ alias: 'list' });

  onDelete(vehicle: VehicleInterface) {
    this.delete.emit(vehicle);
  }

  onEdit(vehicle: VehicleInterface) {
    this.edit.emit(vehicle);
  }

  onUpdate(vehicle: VehicleInterface) {
    this.update.emit(vehicle);
  }
}
