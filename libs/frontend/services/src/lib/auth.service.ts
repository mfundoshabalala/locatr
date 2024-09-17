import { UserRole } from '@profolio/interfaces';
import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import urlJoin from 'url-join';

interface UsernameInterface {
  username: string;
  message?: string;
}

interface UserLoginInterface extends UsernameInterface {
  password: string;
  accessToken?: string;
}

export interface UserRegistrationInterface extends UserLoginInterface {
  email: string;
}

interface ResetPasswordInterface extends UsernameInterface {
  password: string;
  token: string;
}

interface VerifyUserInterface extends UsernameInterface {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private authUrl = urlJoin(process.env['LOCATR_API_URL'] as string, 'auth');

  router = inject(Router);
  http = inject(HttpClient);

  async register(user: UserRegistrationInterface) {
    try {
      const url = urlJoin(this.authUrl, 'register');
      return await lastValueFrom(this.http.post<UserRegistrationInterface>(url, user));
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Registration failed: ' + error.message);
      } else {
        throw new Error('Registration failed: Unknown error');
      }
    }
  }

  async login(user: UserLoginInterface) {
    try {
      const url = urlJoin(this.authUrl, 'login');
      const response = await lastValueFrom(this.http.post<UserLoginInterface>(url, user));
      if (!response?.accessToken) {
        throw new Error('Login failed: No access token received');
      }
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Login failed: ' + error.message);
      } else {
        throw new Error('Login failed: Unknown error');
      }
    }
  }

  async forgotPassword({ username }: UsernameInterface) {
    try {
      const url = urlJoin(this.authUrl, 'forgot-password');
      return await lastValueFrom(this.http.post<UsernameInterface>(url, { username }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Reset password failed: ' + error.message);
      } else {
        throw new Error('Reset password failed: Unknown error');
      }
    }
  }

  async resetPassword({ token, password, username }: ResetPasswordInterface) {
    try {
      const url = urlJoin(this.authUrl, 'reset-password');
      return await lastValueFrom(this.http.post<ResetPasswordInterface>(url, { token, password, username }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Reset password failed: ' + error.message);
      } else {
        throw new Error('Reset password failed: Unknown error');
      }
    }
  }

  async verifyUser({ token, username }: VerifyUserInterface) {
    try {
      const url = urlJoin(this.authUrl, 'verify-user');
      return await lastValueFrom(this.http.post<VerifyUserInterface>(url, { token, username }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Verification failed: ' + error.message);
      } else {
        throw new Error('Verification failed: Unknown error');
      }
    }
  }

  getUserRole(): string {
    return UserRole.ADMIN;
  }

  logout(): void {
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
