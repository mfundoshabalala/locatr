import { Component, effect, input, model, signal, output, viewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <input type="text"
        #searchQueryInput [placeholder]="placeholder()"
        (input)="handleSearchQueryUpdate(searchQueryInput.value)" />
      <img src="assets/icons/search-map-svgrepo-com.svg" alt="Search Map Icon" />
    </div>
  `,
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  private searchService = inject(SearchService);
  seachQueryElement = viewChild<ElementRef<HTMLInputElement>>('searchQueryInput');
  placeholder = input<string>('search');
  searchType = input<Search>('none', { alias: 'type' });
  filterKey = input<string>('', { alias: 'key' });
  filterList = input<(string | SearchItem)[]>([], { alias: 'list' });
  listChange = output<(string | SearchItem)[]>({ alias: 'list' });
  placeChange = output<google.maps.places.PlaceResult>({ alias: 'place' });

  handleSearchQueryUpdate = (searchQuery: string) => {
    if (this.searchType() === 'list') {
      const filteredList = this.searchService.filterListBySearchQuery(searchQuery, this.filterList());
      this.listChange.emit(filteredList);
    } else if (this.searchType() === 'address') {
      const element = this.seachQueryElement()?.nativeElement;
      const callback = (place: google.maps.places.PlaceResult) => this.placeChange.emit(place);
      if (element) this.searchService.initializeAutocomplete(element, callback);
    } else {
      console.error('Invalid search');
    }
  };
}

// move to a shared module
export type Search = 'list' | 'address' | 'none';
type SearchItem = { [key: string]: string|number|boolean };
