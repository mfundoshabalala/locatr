// login.component.ts
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../services';

interface LoginInterface {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  returnUrl = '';
  credentials: LoginInterface = {
    username: '',
    password: '',
  };

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard' as string;
  }

  async onSubmit() {
    try {
      await this.authService.login(this.credentials)
    } catch (error) {
      console.error('Login failed: ', error);
    } finally {
      this.router.navigateByUrl(this.returnUrl);
    }
  }
}
