// toast.service.ts
import { Injectable, signal } from '@angular/core';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number; // duration in milliseconds
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSignal = signal<Toast | null>(null);

  get toastChangeSignal$() {
    return this.toastSignal;
  }

  private setToast(toast: Toast) {
    this.toastSignal.set(toast);
  }

  clearToast() {
    this.toastSignal.set(null);
  }

  private show(message: string, type: 'success' | 'error' | 'info' | 'warning', duration = 3000) {
    this.setToast({ message, type, duration });
    setTimeout(() => this.clearToast(), duration);
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
}
