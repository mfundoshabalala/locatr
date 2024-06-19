import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-map-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-search-bar.component.html',
  styleUrl: './map-search-bar.component.css',
})
export class MapSearchBarComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;
  @Output() placeSelected = new EventEmitter<google.maps.places.PlaceResult>();

  autocompleteService!: google.maps.places.AutocompleteService;
  placesService!: google.maps.places.PlacesService;
  predictions: google.maps.places.AutocompletePrediction[] = [];
  loading = true;

  ngOnInit(): void {
    console.log('MapSearchBarComponent initialized');
  }

  ngAfterViewInit(): void {
    this.initializeAutocompleteService();
  }

  private initializeAutocompleteService() {
    if (google && google.maps && google.maps.places) {
      this.autocompleteService = new google.maps.places.AutocompleteService();
      this.placesService = new google.maps.places.PlacesService(this.searchInput.nativeElement);
    }
  }

  onInputChange(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    if (input.length > 0 && this.autocompleteService) {
      this.autocompleteService.getPlacePredictions({ input }, (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
          this.predictions = predictions;
        } else {
          this.predictions = [];
        }
      });
    } else {
      this.predictions = [];
    }
  }

  selectPrediction(placeId: string) {
    if (this.placesService) {
      this.placesService.getDetails({ placeId }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place) {
          this.placeSelected.emit(place);
          this.predictions = [];
          if (this.searchInput.nativeElement) {
            this.searchInput.nativeElement.value = place.formatted_address || '';
          }
        }
      });
    }
  }
}
