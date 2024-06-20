// toast.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number; // duration in milliseconds
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toastSubject = new BehaviorSubject<ToastMessage | null>(null);
  toast$ = this._toastSubject.asObservable();

  private show(message: string, type: 'success' | 'error' | 'info' | 'warning', duration = 3000) {
    this._toastSubject.next({ message, type, duration });
    setTimeout(() => this.clear(), duration);
  }

  showSuccess(message: string, duration = 5000) {
    this.show(message, 'success', duration);
  }

  showError(message: string, duration = 5000) {
    this.show(message, 'error', duration);
  }

  showInfo(message: string, duration = 5000) {
    this.show(message, 'info', duration);
  }

  showWarning(message: string, duration = 5000) {
    this.show(message, 'warning', duration);
  }

  clear() {
    this._toastSubject.next(null);
  }
}
