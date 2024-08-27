/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpCacheService {
  private readonly cacheName = 'httpCache';

  async get<T>(key: string): Promise<T | null> {
    const cache = await caches.open(this.cacheName);
    const response = await cache.match(key);
    if (response) {
      return response.json(); // Return the parsed JSON data
    }
    return null;
  }

  async set<T>(key: string, data: T): Promise<void> {
    const cache = await caches.open(this.cacheName);
    const response = new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
    await cache.put(key, response);
  }

  async delete(key: string): Promise<void> {
    const cache = await caches.open(this.cacheName);
    await cache.delete(key);
  }
}
