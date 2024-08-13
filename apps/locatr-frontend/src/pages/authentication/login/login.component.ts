// login.component.ts
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '@profolio/frontend/services';
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
  private fb = inject(FormBuilder);
  private toasterService = inject(ToasterService);
  private authService = inject(AuthenticationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  loginForm!: FormGroup

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        await this.authService.login(this.loginForm.value);
      } catch (error) {
        this.errorToast();
      } finally {
        this.successToast();
        this.router.navigateByUrl(this.returnUrl);
      }
    }
  }

  private successToast() {
    this.toasterService.addToast('Login successful', 'success');
  }

  private errorToast() {
    this.toasterService.addToast('Login failed', 'error');
  }
}
