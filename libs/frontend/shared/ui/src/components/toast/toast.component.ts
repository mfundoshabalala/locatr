import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast, ToastService } from '../../services/toast.service';
import { ToastDisplayComponent } from '../toast-display/toast-display.component';
@Component({
  selector: 'lib-toast',
  standalone: true,
  imports: [CommonModule, ToastDisplayComponent],
  template: `<lib-toast-display *ngIf="toast" [type]="toast.type" [message]="toast.message"></lib-toast-display> `,
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  protected toast: Toast | null = null;

  private readonly toastService = inject(ToastService);
  constructor() {
    this.reactiveToastChange();
  }

  private reactiveToastChange() {
    effect(() => {
      this.toast = this.toastService.toastChangeSignal$();
    });
  }
}
