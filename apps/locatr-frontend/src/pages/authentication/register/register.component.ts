// register.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthenticationService, UserRegistration } from '../../../services';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  currentStep = 1;

  constructor(private authService: AuthenticationService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      // Step 1 controls
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      position: ['', Validators.required],
      department: ['', Validators.required],
      // Step 2 controls
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  nextStep() {
    if (this.currentStep === 1 && this.isStep1Valid()) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStep1Valid(): boolean {
    const step1Controls = ['firstName', 'lastName', 'email', 'position', 'department'];
    return step1Controls.every((name) => {
      const control = this.registerForm.get(name);
      return control?.valid;
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const user: UserRegistration = {
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value,
        employee: {
          firstName: this.registerForm.get('firstName')?.value,
          lastName: this.registerForm.get('lastName')?.value,
          email: this.registerForm.get('email')?.value,
          position: this.registerForm.get('position')?.value,
          department: this.registerForm.get('department')?.value,
        },
      }
      await this.authService.register(user);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
