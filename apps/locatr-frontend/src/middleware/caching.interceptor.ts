import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this.cache.get(request.urlWithParams);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return next.handle(request).pipe(tap((event) => {
			if (event instanceof HttpResponse) {
				this.cache.set(request.urlWithParams, event);
			}
		}));
  }
}