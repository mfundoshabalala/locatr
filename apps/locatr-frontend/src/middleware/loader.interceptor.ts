import { finalize, Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { LoaderService } from '../services';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
	private readonly loader = inject(LoaderService);

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.loader.show();
		return next.handle(req).pipe(finalize(() => this.loader.hide()));
	}
}