import { inject, Injectable } from '@angular/core';
import { GoogleMapsService } from './google-maps.service';

declare const google:any;
@Injectable({ providedIn: 'root' })
export class SearchService {
  private googleService = inject(GoogleMapsService);

  filterListBySearchQuery(searchQuery: string, searchList: (string | SearchItem)[]): (string | SearchItem)[] {
    return searchList.filter((item) => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(searchQuery);
      }
      return Object.keys(item).some((key) => (item[key] as string).toLowerCase().includes(searchQuery));
    });
  }

  async initializeAutocomplete(
    element: HTMLInputElement,
    placeChangeCallback: (place: google.maps.places.PlaceResult) => void
  ) {
    const loader = this.googleService.loader;
    const { Autocomplete } = await loader.importLibrary('places');
    const autocomplete = new Autocomplete(element);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      console.log('place', place);
      placeChangeCallback(place);
    });
  }
}

// move to a shared module
type Search = 'filter' | 'search';
type SearchItem = { [key: string]: string|number|boolean };