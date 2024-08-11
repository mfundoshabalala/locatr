import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContactInterface, EmployeeInterface, UserRole } from '@profolio/interfaces';
import { lastValueFrom } from 'rxjs';

interface UserLogin {
  username: string;
  password: string;
  access_token?: string;
}

export interface UserRegistration extends UserLogin {
	email: string;
  contact: ContactInterface;
	employee: EmployeeInterface;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private authUrl = process.env["LOCATR_API_URL"] + 'auth';

  constructor(private http: HttpClient, private router: Router) {}

  async register(user: UserRegistration) {
    const url = `${this.authUrl}/register`;
    try {
      await lastValueFrom(this.http.post<UserRegistration>(url, user));
      this.router.navigate(['/auth/login']);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Registration failed: ' + error.message);
      } else {
        throw new Error('Registration failed: Unknown error');
      }
    }
  }

  async login(user: UserLogin) {
    const url = `${this.authUrl}/login`;
    try {
      const response = await lastValueFrom(this.http.post<UserLogin>(url, user));
      if (!response?.access_token) {
        throw new Error('Login failed: No access token received');
      }
      sessionStorage.setItem('access_token', response?.access_token);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Login failed: ' + error.message);
      } else {
        throw new Error('Login failed: Unknown error');
      }
    }
  }

  getUserRole(): string {
    return UserRole.ADMIN;
  }

  logout() {
    sessionStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('access_token');
  }

  getAuthToken(): string | null {
    return sessionStorage.getItem('access_token');
  }
}
