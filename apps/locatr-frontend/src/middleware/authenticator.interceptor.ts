import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { AuthenticationService } from '../services';

@Injectable()
export class AuthenticatorInterceptor implements HttpInterceptor {
	private readonly authService = inject(AuthenticationService);

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this.authService.getAuthToken();
		if (token) {
      request = request.clone({ setHeaders: { 'X-Authorisation': token } });
    }
    return next.handle(request);
	}
}
