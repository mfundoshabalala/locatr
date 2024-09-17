// register.component.ts

import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthenticationService } from '@profolio/frontend/services';
import { BasicInputComponent } from '@profolio/frontend/shared/ui';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from '@profolio/utils';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BasicInputComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  showNewPassword = false;
  showConfirmPassword = false;
  message = signal<string>('');

  constructor(private authService: AuthenticationService, private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator }
    );
  }

  togglePasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const user = this.createUserEntity();
      const { message } = await this.authService.register(user);
      if (message) this.message.set(message);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  private createUserEntity() {
    return {
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('newPassword')?.value,
    };
  }
}
