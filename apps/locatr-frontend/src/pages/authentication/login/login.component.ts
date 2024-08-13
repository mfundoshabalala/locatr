// login.component.ts
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginInterface } from '@profolio/interfaces';
import { AuthenticationService } from '@profolio/frontend/services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  returnUrl = '';
  credentials: LoginInterface = {
    username: '',
    password: '',
  };

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthenticationService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || ('/dashboard' as string);
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        await this.authService.login(this.loginForm.value);
      } catch (error) {
        console.error('Login failed: ', error);
      } finally {
        this.router.navigateByUrl(this.returnUrl);
      }
    }
  }
}
