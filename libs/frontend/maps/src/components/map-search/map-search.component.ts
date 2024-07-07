import { Component, ViewChild, AfterViewInit, inject } from '@angular/core';
import { PlaceResult, PlaceSearchResult } from '../../interfaces/places.interface';
import { PlacesService } from '../../services/places.service';
import { SearchInputComponent } from '../search-input/search-input.component';
import { effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-map-search',
  standalone: true,
  imports: [CommonModule, SearchInputComponent],
  template: ` <lib-search-input #searchInput [placeholder]="'Enter address...'"> </lib-search-input> `,
  styleUrls: ['./map-search.component.css'],
})
export class MapSearchComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: SearchInputComponent;
  private readonly placesService = inject(PlacesService);

  ngAfterViewInit() {
    effect(() => {
      const place = this.searchInput.placeChangedSignal$();
      if (place) {
        this.handlePlaceChange(place);
      }
    });
  }

  private handlePlaceChange(place: PlaceResult) {
    const result: PlaceSearchResult = {
      address: place.formatted_address || '',
      name: place.name || '',
      location: place.geometry?.location,
      imageUrl: this.getPhotoUrl(place),
      iconUrl: place.icon,
    };
    this.placesService.setPlace(result);
  }

  private getPhotoUrl(place: PlaceResult | undefined): string | undefined {
    return place?.photos && place?.photos.length > 0 ? place?.photos[0].getUrl({ maxWidth: 500 }) : undefined;
  }
}
