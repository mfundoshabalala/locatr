import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  filterListBySearchQuery(searchQuery: string, searchList: (string | SearchItem)[]): (string | SearchItem)[] {
    return searchList.filter((item) => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(searchQuery);
      }
      return Object.keys(item).some((key) => (item[key] as string).toLowerCase().includes(searchQuery));
    });
  }

  initializeAutocomplete(
    element: HTMLInputElement,
    placeChangeCallback: (place: google.maps.places.PlaceResult) => void
  ) {
    const autocomplete = new google.maps.places.Autocomplete(element);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      // console.log('place', place);
      placeChangeCallback(place);
    });
  }
}

// move to a shared module
type Search = 'filter' | 'search';
type SearchItem = { [key: string]: string|number|boolean };