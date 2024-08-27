/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonModule } from "@angular/common";
import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'lib-drop-down',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true,
    },
  ],
  template: `
    <div class="flex items-center gap-3">
      <label *ngIf="label" class="dropDownLabel" [for]="label">{{ label }}</label>
      <select class="capitalize" [id]="label" [value]="value" (change)="handleChange($event)" (blur)="onTouched()" [disabled]="isDisabled">
        <option disabled selected [value]="null">Select {{ label }}</option>
        @if (key) {
          <option *ngFor="let entity of options" [value]="entity[key]">{{ entity[fieldName]?.replaceAll('_', ' ') }}</option>
        } @else {
          <option *ngFor="let entity of options" [value]="entity">{{ entity?.replaceAll('_', ' ') }}</option>
        }
      </select>
    </div>
  `,
  styles: [
    `
      :host {
        all: unset; /* Resets all styles on the host element */
        display: block; /* Optionally, set the display property */
      }

      .dropDownLabel {
        @apply w-28 text-sm text-pretty font-medium leading-tight text-slate-600 text-right capitalize;
      }

      select {
        @apply w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 rounded-md focus:outline-none disabled:bg-slate-200;
      }
    `
  ],
})
export class DropDownComponent implements ControlValueAccessor {
  @Input() key!: string;
  @Input() fieldName = 'name';
  @Input() label!: string;
  @Input() options: any[] = [];

  value: any;
  isDisabled = false;

  getEntityValue(entity: any, fieldname: string): string {
    if (entity && fieldname) {
      return entity[fieldname];
    }
    return entity;
  }

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

  handleChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.onChange(target.value);
    }
  }
}
