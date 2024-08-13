import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast, ToasterService } from './toaster.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-toaster',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngIf="(toasts$ | async)?.length ?? 0 > 0" class="toaster">
    <div *ngFor="let toast of toasts$ | async" class="toast" [ngClass]="toast.type">
      <span>{{ toast.message }}</span>
      <button (click)="removeToast(toast.id)">Close</button>
    </div>
  </div>
  `,
  styleUrl: './toaster.component.css',
})
export class ToasterComponent {
  private toasterService = inject(ToasterService);
  toasts$: Observable<Toast[]> = this.toasterService.getToasts();

  removeToast(id: string): void {
    this.toasterService.removeToast(id);
  }
}
