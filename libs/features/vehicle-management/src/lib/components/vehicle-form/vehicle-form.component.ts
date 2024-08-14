import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehicleType, VehicleInterface } from '@profolio/interfaces';
import { AbstractFormComponent } from '@profolio/core';
import { BasicInputComponent, DropDownComponent, FormButtonsComponent } from '@profolio/frontend/shared/ui';

@Component({
  selector: 'lib-vehicle-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormButtonsComponent, BasicInputComponent, DropDownComponent],
  templateUrl: './vehicle-form.component.html',
})
export class VehicleFormComponent extends AbstractFormComponent<VehicleInterface> {
  vehicleTypes = Object.values(VehicleType);

  protected override createForm(): FormGroup {
    return this.fb.group({
      make: ['', [Validators.required, Validators.maxLength(255)]],
      model: ['', [Validators.required, Validators.maxLength(255)]],
      type: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1886), Validators.max(new Date().getFullYear())]],
      licensePlate: ['', [Validators.required, Validators.maxLength(255)]],
      capacity: [null, Validators.min(1)],
      currentLocation: ['', Validators.maxLength(255)],
    });
  }
}
