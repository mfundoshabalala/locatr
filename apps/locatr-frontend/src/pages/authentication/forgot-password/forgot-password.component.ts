import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '@profolio/frontend/services';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent implements OnInit {
  message = signal<string>('');
  forgotPasswordForm!: FormGroup;

  private fb = inject(FormBuilder);
  private authService = inject(AuthenticationService);

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const { message } = await this.authService.forgotPassword(this.forgotPasswordForm.value);
      if (message) {
        this.message.set(message);
      }
    }
  }
}
