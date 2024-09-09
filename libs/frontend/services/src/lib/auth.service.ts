import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContactInterface, EmployeeInterface, UserRole } from '@profolio/interfaces';
import { lastValueFrom } from 'rxjs';
import urlJoin from 'url-join';

interface UserLogin {
  username: string;
  password: string;
  accessToken?: string;
}

export interface UserRegistration extends UserLogin {
	email: string;
  contact: ContactInterface;
	employee: EmployeeInterface;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private authUrl = urlJoin(process.env["LOCATR_API_URL"] as string, 'auth');

  router = inject(Router);
  http = inject(HttpClient);

  async register(user: UserRegistration) {
    const url = urlJoin(this.authUrl, 'register');
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
    const url = urlJoin(this.authUrl, 'login');
    try {
      const response = await lastValueFrom(this.http.post<UserLogin>(url, user));
      if (!response?.accessToken) {
        throw new Error('Login failed: No access token received');
      }
      sessionStorage.setItem('token', response?.accessToken);
      sessionStorage.setItem('username', response?.username);
      sessionStorage.setItem('user', JSON.stringify(response));
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
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  getAuthToken(): string | null {
    return sessionStorage.getItem('token');
  }
}
