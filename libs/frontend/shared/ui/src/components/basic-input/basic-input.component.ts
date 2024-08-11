/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lib-basic-input',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="flex items-center gap-3">
      <label *ngIf="label" [for]="label" class="inputLabel">
        {{ label }}
      </label>
      <input
        [type]="type"
        [id]="label"
        [value]="value"
        (input)="handleInput($event)"
        (blur)="onTouched()"
        [disabled]="isDisabled"
        [placeholder]="placeholder"
        class="inputField" />
    </div>
  `,
  styles: [
    `
      :host {
        all: unset; /* Resets all styles on the host element */
        display: block; /* Optionally, set the display property */
      }
      .inputLabel {
        @apply w-28 text-sm text-pretty font-medium leading-tight text-slate-600 text-right capitalize;
      }

      input {
        @apply w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 rounded-md focus:outline-none disabled:bg-slate-200;
      }
    `,
  ],
})
export class BasicInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() type: 'text' | 'number' | 'phone' | 'password' | 'email' | 'url' | 'datetime-local' = 'text';
  @Input() placeholder = '';

  value: any;
  isDisabled = false;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.onChange(target.value);
    }
  }
}