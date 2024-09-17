import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserRole, UserStatus, VehicleType } from '@profolio/interfaces';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  showNewPassword = false;
  showConfirmPassword = false;
  message = signal<string>('');

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      username: [''],
      email: [''],
      isVerified: [false],
      status: [UserStatus.ACTIVE],
      role: [UserRole.CUSTOMER],
      employee: this.fb.group({
        firstName: [''],
        lastName: [''],
        department: [''],
        position: [''],
        contact: this.fb.group({
          name: [''],
          phone: [''],
          email: [''],
          version: [1],
        }),
      }),
      contact: this.fb.group({
        name: [''],
        phone: [''],
        email: [''],
        version: [1],
      }),
      assignedVehicle: this.fb.group({
        make: [''],
        model: [''],
        type: [VehicleType.TRUCK],
        year: [1990],
        licensePlate: [''],
        capacity: [0],
        driver: [''],
        version: [1],
      }),
      version: [1],
    });
  }

  togglePasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async ngOnInit() {
    console.log('Fetch user');
  }

  async onSubmit() {
    console.log(this.profileForm.value);
  }
}
