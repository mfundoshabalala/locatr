import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, inject, signal } from '@angular/core';

import { AuthenticationService } from '@profolio/frontend/services';
import { CommonModule } from '@angular/common';
import { ToasterService } from '@toaster';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  showNewPassword = false;
  showConfirmPassword = false;
  message = signal<string>('');
  resetPasswordForm!: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private toasterService = inject(ToasterService);
  private authService = inject(AuthenticationService);

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group(
      {
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');

    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async onSubmit() {
    if (this.resetPasswordForm.valid) {
      const { newPassword } = this.resetPasswordForm.value;
      const token = this.route.snapshot.queryParams['token'];
      const username = this.route.snapshot.queryParams['username'];
      try {
        const { message } = (await this.authService.resetPassword({ token, password: newPassword, username })) as {
          message: string;
        };
        this.successToast();
        this.message.set(message);
        setTimeout(() => {
          this.router.navigateByUrl('auth/login');
        }, 5000);
      } catch (error) {
        this.errorToast();
        throw new Error('Failed to reset password');
      }
    }
  }

  private successToast() {
    this.toasterService.addToast('Password reset successful', 'success');
  }

  private errorToast() {
    this.toasterService.addToast('Password reset failed', 'error');
  }
}
