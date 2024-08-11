/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, ViewChild, ElementRef, forwardRef, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SearchService } from '../..';
import { GoogleService } from '@profolio/frontend/services';

@Component({
  selector: 'lib-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex items-center gap-3">
      <label *ngIf="label" [for]="label" class="inputLabel">
        {{ label }}
      </label>
      <input
        type="search"
        #searchQueryInput
        [placeholder]="placeholder"
        (input)="onInput($event)"
        (blur)="onTouched()"
        [value]="value" />
    </div>
  `,
  styles: [
    `
      :host {
        all: unset; /* Resets all styles on the host element */
        display: inline-block; /* Optionally, set the display property */
        @apply col-span-full;
      }
      .inputLabel {
        @apply w-28 text-sm text-pretty font-medium leading-tight text-slate-600 text-right capitalize;
      }

      input {
        @apply w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 rounded-md focus:outline-none disabled:bg-slate-200;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBoxComponent),
      multi: true,
    },
  ],
})
export class SearchBoxComponent implements ControlValueAccessor {
  private searchService = inject(SearchService);
  private googleService = inject(GoogleService);

  @ViewChild('searchQueryInput') searchQueryInput!: ElementRef<HTMLInputElement>;

  @Input() label = '';
  @Input() placeholder = 'search';
  @Input() type: Search = 'none';
  @Input() filterKey = '';
  @Input() filterList: (string | SearchItem)[] = [];

  @Output() listChange = new EventEmitter<(string | SearchItem)[]>();
  @Output() placeChange = new EventEmitter<google.maps.places.PlaceResult>();

  value = '';

  private onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(obj: any): void {
    this.value = obj;
    if (this.searchQueryInput) {
      this.searchQueryInput.nativeElement.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (this.searchQueryInput) {
      this.searchQueryInput.nativeElement.disabled = isDisabled;
    }
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);

    if (this.type === 'list') {
      const filteredList = this.searchService.filterListBySearchQuery(this.value, this.filterList);
      this.listChange.emit(filteredList);
    } else if (this.type === 'address') {
      const element = this.searchQueryInput.nativeElement;
      const callback = (place: google.maps.places.PlaceResult) => this.placeChange.emit(place);
      this.googleService.initializeAutocomplete(element, callback);
    }
  }
}

// Move to a shared module
export type Search = 'list' | 'address' | 'none';
type SearchItem = { [key: string]: string | number | boolean };
