import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-form-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="flex gap-2 py-4 justify-end duration-300 mt-auto">
    @if (canClear) {
      <button type="button" class="border rounded-md shadow-sm px-3 py-1.5 font-medium text-sm" (click)="onClear()">Clear</button>
    }
    @if (canDelete) {
      <button type="button" class="border rounded-md shadow-sm px-3 py-1.5 font-medium text-sm" (click)="onDelete()">Delete</button>
    }
    @if (canCancel) {
      <button type="button" class="border rounded-md shadow-sm px-3 py-1.5 font-medium text-sm" (click)="onCancel()">Cancel</button>
    } @else {
      <button type="button" class="border rounded-md shadow-sm px-3 py-1.5 font-medium text-sm" (click)="onClose()">Close</button>
    }
    @if (canSave) {
      <button type="submit" class="border rounded-md shadow-sm px-3 py-1.5 font-medium text-sm">Save</button>
    }
  </div>
  `,
  styleUrl: './form-buttons.component.css',
})
export class FormButtonsComponent {
  @Input()
  canSave = false;
  @Input()
  canDelete = false;
  @Input()
  canCancel = false;
  @Input()
  canClear = false;

  @Output() save = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();

  onSave() {
    this.save.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  onClear() {
    this.clear.emit();
  }

  onClose() {
    this.cancel.emit();
  }
}
