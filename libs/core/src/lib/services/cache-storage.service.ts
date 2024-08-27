import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheStorageService {
  private cacheName = 'http-cache';

  async get(request: Request): Promise<Response | undefined> {
    const cache = await caches.open(this.cacheName);
    const cachedResponse = await cache.match(request);
    return cachedResponse || undefined;
  }

  async put(request: Request, response: Response): Promise<void> {
    const cache = await caches.open(this.cacheName);
    await cache.put(request, response.clone());
  }

  async clear(): Promise<void> {
    const cache = await caches.open(this.cacheName);
    const keys = await cache.keys();
    await Promise.all(keys.map(key => cache.delete(key)));
  }

  async delete(request: Request): Promise<boolean> {
    const cache = await caches.open(this.cacheName);
    return await cache.delete(request);
  }
}
