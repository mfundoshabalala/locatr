import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  private toasts: Toast[] = [];

  addToast(message: string, type: 'success' | 'error' | 'info' | 'warning'): void {
    const id = uuidv4();
    const newToast: Toast = { id, message, type };
    this.toasts.push(newToast);
    this.toastsSubject.next([...this.toasts]);

    setTimeout(() => this.removeToast(id), 5000);
  }

  removeToast(id: string): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.toastsSubject.next([...this.toasts]);
  }

  getToasts(): Observable<Toast[]> {
    return this.toastsSubject.asObservable();
  }
}
