import {
  Component,
  ViewChild,
  ElementRef,
  forwardRef,
  inject,
  input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SearchService } from '../../services';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <input
        type="text"
        class="border rounded-sm bg-slate-100 py-1.5 border-slate-300 flex-1 max-w-72"
        #searchQueryInput
        [placeholder]="placeholder()"
        (input)="onInput($event)"
        (blur)="onTouched()"
        [value]="value" />
      <img src="assets/icons/search-map.svg" alt="Search Map Icon" />
    </div>
  `,
  styleUrls: ['./search-box.component.css'],
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

  @ViewChild('searchQueryInput') searchQueryInput!: ElementRef<HTMLInputElement>;

  placeholder = input<string>('search');
  searchType = input<Search>('none', { alias: 'type' });
  filterKey = input<string>('', { alias: 'key' });
  filterList = input<(string | SearchItem)[]>([], { alias: 'list' });

  @Output() listChange = new EventEmitter<(string | SearchItem)[]>();
  @Output() placeChange = new EventEmitter<google.maps.places.PlaceResult>();

  value = '';
  onChange: any;
  onTouched: any;

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.handleSearchQueryUpdate(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
    if (this.searchQueryInput) {
      this.searchQueryInput.nativeElement.value = value;
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

  handleSearchQueryUpdate(searchQuery: string) {
    if (this.searchType() === 'list') {
      const filteredList = this.searchService.filterListBySearchQuery(searchQuery, this.filterList());
      this.listChange.emit(filteredList);
    } else if (this.searchType() === 'address') {
      const element = this.searchQueryInput.nativeElement;
      const callback = (place: google.maps.places.PlaceResult) => this.placeChange.emit(place);
      this.searchService.initializeAutocomplete(element, callback);
    } else {
      console.error('Invalid search type');
    }
  }
}

// Move to a shared module
export type Search = 'list' | 'address' | 'none';
type SearchItem = { [key: string]: string | number | boolean };
