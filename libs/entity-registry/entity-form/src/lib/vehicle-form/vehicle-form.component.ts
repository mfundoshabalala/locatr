import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehicleType } from '@profolio/interfaces';
import { VehicleService } from '@profolio/frontend/services';

@Component({
  selector: 'lib-vehicle-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.css',
})
export class VehicleFormComponent implements OnInit {
  createVehicleForm!: FormGroup;
  vehicleTypes = Object.values(VehicleType);

  constructor(private fb: FormBuilder, private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.createVehicleForm = this.fb.group({
      make: ['', [Validators.required, Validators.maxLength(255)]],
      model: ['', [Validators.required, Validators.maxLength(255)]],
      type: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1886), Validators.max(new Date().getFullYear())]],
      licensePlate: ['', [Validators.required, Validators.maxLength(255)]],
      capacity: [null, Validators.min(1)],
      currentLocation: ['', Validators.maxLength(255)]
    });
  }

  onSubmit(): void {
    if (this.createVehicleForm.valid) {
      this.vehicleService.create(this.createVehicleForm.value).then((vehicle) => {
        console.log('Vehicle created', vehicle);
      });
    }
  }
}
