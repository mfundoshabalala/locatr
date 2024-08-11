/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-basic-text-area',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-3">
      <label *ngIf="label" [for]="label" class="textareaLabel">
        {{ label }}
      </label>
      <textarea
        [id]="label"
        [value]="value"
        (input)="handleInput($event)"
        (blur)="onTouched()"
        [disabled]="isDisabled"
        [placeholder]="placeholder">
      </textarea>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicTextAreaComponent),
      multi: true,
    },
  ],
  styles: [
    `
      :host {
        all: unset;
        display: block;
      }

      .textareaLabel {
        @apply w-28 text-sm text-pretty font-medium leading-tight text-slate-600 text-right capitalize;
      }

      textarea {
        @apply border rounded py-1.5 border-slate-300 flex-1 bg-white shadow-sm;
      }
    `,
  ],
})
export class BasicTextAreaComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() placeholder?: string;
  @Input() isDisabled = false;
  value = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  handleInput(event: any): void {
    const value = event.target.value;
    this.value = value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
