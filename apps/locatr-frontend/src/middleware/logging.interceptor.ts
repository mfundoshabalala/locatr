import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(tap((event) => {
			if (event instanceof HttpResponse) {
				console.log(req.url, 'returned a response with status', event.status);
			}
		}));
	}
}