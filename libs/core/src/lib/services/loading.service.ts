import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _loading = signal<boolean>(false);

  loadingMap = new Map<string, boolean>();

  setLoading(url: string, loading: boolean): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }

    if (loading === true) {
      this.loadingMap.set(url, loading);
      const _ = Array.from(this.loadingMap.values()).some((loading) => loading);
      this._loading.set(_);
    } else if (this.loadingMap.has(url) && loading === false) {
      this.loadingMap.delete(url);
      const _ = Array.from(this.loadingMap.values()).some((loading) => loading);
      this._loading.set(_);
    }

    if (this.loadingMap.size === 0) {
      this._loading.set(false);
    }
  }

  get loading() {
    return this._loading();
  }

  start() {
    this._loading.set(true);
  }

  stop() {
    this._loading.set(false);
  }
}
