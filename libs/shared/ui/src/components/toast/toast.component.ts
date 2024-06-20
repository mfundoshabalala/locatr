import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ToastMessage, ToastService } from '../../services/toast.service';

@Component({
  selector: 'lib-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="toastMessage$ | async as toast" class="toast" [ngClass]="toast.type">
      <span class="emoji">{{ emojis[toast.type] }}</span>
      <span class="flex-1 text-pretty">{{ toast.message }}</span>
      <button (click)="closeToast()" class="text-xl font-bold">&times;</button>
    </div>
  `,
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  toastMessage$: Observable<ToastMessage | null>;
  readonly emojis = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  };

  constructor(private toastService: ToastService) {
    this.toastMessage$ = this.toastService.toast$;
  }

  closeToast() {
    this.toastService.clear();
  }
}
