/* eslint-disable @typescript-eslint/no-explicit-any */
// login.component.ts

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthenticationService } from '@profolio/frontend/services';
import { CommonModule } from '@angular/common';
import { ToasterService } from '@toaster';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private returnUrl = '';
  showPassword = false;
  loginForm!: FormGroup;

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private toasterService = inject(ToasterService);
  private authService = inject(AuthenticationService);

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        const response = await this.authService.login(this.loginForm.value);
        if (response?.accessToken) {
          this.saveSessionItems(response);
          this.onSuccess();
        } else {
          this.onFailed();
        }
      } catch (error) {
        this.onFailed();
      }
    }
  }

  private saveSessionItems(response: any) {
    sessionStorage.setItem('token', response?.accessToken);
    sessionStorage.setItem('username', response?.username);
    sessionStorage.setItem('user', JSON.stringify(response));
  }

  private removeSessionItems() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('user');
  }

  private onFailed() {
    this.removeSessionItems();
    this.errorToast();
  }

  private onSuccess() {
    this.successToast();
    this.router.navigateByUrl(this.returnUrl);
  }

  private successToast() {
    this.toasterService.addToast('Login successful.', 'success');
  }

  private errorToast() {
    this.toasterService.addToast('Login failed, try again.', 'error');
  }
}
