import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface UserLogin {
	username: string;
	password: string;
}

interface UserRegistration {
	username: string;
	password: string;
	roleId: string | null;
	department: string | null;
	employee: EmployeeInterface;
}

interface EmployeeInterface {
	firstName: string;
	lastName: string;
	email: string;
	position: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private authUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  async register(user: UserRegistration) {
    try {
      await lastValueFrom(this.http.post<any>(`${this.authUrl}/register`, user));
    } catch (error) {
      throw new Error('Registration failed: ' + error);
    }
  }

  async login(user: UserLogin) {
    try {
      const response = await lastValueFrom(this.http.post<any>(`${this.authUrl}/login`, user));
      sessionStorage.setItem('access_token', response?.access_token);
    } catch (error) {
      throw new Error('Login failed: ' + error);
    }
  }

	logout() {
		sessionStorage.removeItem('access_token');
	}

  isAuthenticated(): boolean {
		return !!sessionStorage.getItem('access_token');
	}
}