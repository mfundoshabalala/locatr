// register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService, UserRegistration } from '@profolio/frontend/services';

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
      // Step 1 controls (employee + contact)
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      businessEmail: ['', [Validators.required, Validators.email]],
      personalEmail: ['', [Validators.email]],
      position: ['', Validators.required],
      department: ['', Validators.required],
      // Step 2 controls (user authentication)
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
        ],
      ],
      confirmPassword: ['', Validators.required]
    });
  }

  nextStep() {
    if (this.currentStep === 1 && this.validateStep(1)) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateStep(step: number): boolean {
    const stepControlsIterator = this.getStepControls(step);
    const stepControlsArray = Array.from(stepControlsIterator);
    return stepControlsArray.every((name) => {
      const control = this.registerForm.get(name);
      return control?.valid;
    });
  }

  *getStepControls(step: number) {
    const step1Controls = [
      'firstName',
      'lastName',
      'phone',
      'personalEmail',
      'businessEmail',
      'position',
      'department',
    ];
    const step2Controls = ['username', 'password', 'confirmPassword'];
    const controls = step === 1 ? step1Controls : step2Controls;
    for (const control of controls) {
      yield control;
    }
  }

  isControlSuccess(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.touched && control?.valid ? true : false;
  }

  isControlError(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.touched && control?.invalid ? true : false;
  }

  isControlDefault(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.touched ? false : true;
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const user = this.createUserEntity();
      await this.authService.register(user);
      this.registerForm.reset();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  private createUserEntity(): UserRegistration {
    const employee = {
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      position: this.registerForm.get('position')?.value,
      department: this.registerForm.get('department')?.value,
    };
    const contact = {
      name: `${employee.firstName} ${employee.lastName}`,
      phone: this.registerForm.get('phone')?.value,
      email: this.registerForm.get('personalEmail')?.value,
    };
    return {
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('businessEmail')?.value,
      password: this.registerForm.get('password')?.value,
      employee: employee,
      contact: contact,
    };
  }
}
