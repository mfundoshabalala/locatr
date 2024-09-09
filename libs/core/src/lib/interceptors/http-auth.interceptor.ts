/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    const username = sessionStorage.getItem('username');
    let clonedRequest = req;

    if (token && username) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'X-Username': username
        }
      });
    }
    return next.handle(clonedRequest);
  }
}