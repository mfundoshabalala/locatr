/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { applyPhoneMask, applyPointMask } from '@profolio/utils';

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
        [type]="getInputType()"
        [id]="label"
        [value]="value"
        (input)="handleInput($event)"
        (blur)="onTouched()"
        [disabled]="isDisabled"
        [placeholder]="placeholder"
        [autocomplete]="getAutocomplete()"
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
  @Input() type: 'text' | 'number' | 'phone' | 'password' | 'email' | 'url' | 'datetime-local' | 'point' = 'text';
  @Input() placeholder = '';

  value!: string;
  isDisabled = false;

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    if (this.type === 'datetime-local') {
      this.value = this.formatDateTime(value);
    } else {
      this.value = value;
    }
    this.onChange(this.value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getInputType(): string {
    return this.type === 'point' ? 'number' : this.type;
  }

  formatDateTime(value: string): string {
    if (this.type === 'datetime-local' && value) {
      return new Date(value).toISOString().slice(0, 16); // Convert to 'YYYY-MM-DDTHH:mm'
    }
    return value;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      let inputValue = target.value;
      if (this.type === 'phone') {
        inputValue = applyPhoneMask(inputValue);
      } else if (this.type === 'point') {
        inputValue = applyPointMask(inputValue, this.label);
      }
      this.value = inputValue;
      this.onChange(this.value);
    }
  }

  getAutocomplete(): string {
    return this.type === 'password' ? 'new-password' : 'off';
  }
}
