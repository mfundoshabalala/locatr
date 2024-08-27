/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HttpCacheService } from '../services/http-cache.service';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
  constructor(private httpCacheService: HttpCacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const entityUrl = this.getEntityUrl(req.url);

    if (req.method === 'GET') {
      return from(this.httpCacheService.get<any[]>(entityUrl)).pipe(
        switchMap((cachedResponse) => {
          if (cachedResponse) {
            return of(new HttpResponse({ body: cachedResponse, status: 200 }));
          }

          return next.handle(req).pipe(
            tap((event) => {
              if (event instanceof HttpResponse) {
                this.httpCacheService.set(entityUrl, event.body);
              }
            })
          );
        })
      );
    } else {
      return next.handle(req).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.updateCache(entityUrl, req, event.body);
          }
        })
      );
    }
  }

  private getEntityUrl(url: string): string {
    return url.split('?')[0];
  }

  private getEntityId(url: string): string | null {
    const requestUrl = new URL(url);
    return requestUrl.searchParams?.get('id');
  }

  private async updateCache(entityUrl: string, req: HttpRequest<any>, updatedData: any): Promise<void> {
    const method = req.method;
    let cacheList: any[] = [];

    const cachedResponse = await this.httpCacheService.get<any[]>(entityUrl);
    if (cachedResponse) {
      cacheList = cachedResponse;
    }

    const entityId = this.getEntityId(req.url);

    if (method === 'POST') {
      cacheList.push(updatedData);
    } else if (method === 'PATCH' || method === 'PUT') {
      const index = cacheList.findIndex((item: any) => item.id === entityId);
      if (index > -1) {
        cacheList[index] = updatedData;
      }
    } else if (method === 'DELETE') {
      cacheList = cacheList.filter((item: any) => item.id !== entityId);
    }

    await this.httpCacheService.set(entityUrl, cacheList);
  }
}
