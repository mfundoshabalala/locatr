import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  Component,
  ElementRef,
  Input,
  NgZone,
  ViewChild, OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlaceSearchResult } from '../../interfaces/places.interface';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'lib-map-search-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './map-search-input.component.html',
  styleUrl: './map-search-input.component.css',
})
export class MapSearchInputComponent implements AfterViewInit, OnDestroy {
  @ViewChild('inputField') inputField!: ElementRef;
  @Input() placeholder = 'Enter address...';
  autocomplete: google.maps.places.Autocomplete | undefined;

  constructor(private ngZone: NgZone, private placesService: PlacesService) {}

  ngAfterViewInit() {
    this.initAutocomplete();
  }

  ngOnDestroy() {
    if (this.autocomplete) {
      google.maps.event.clearInstanceListeners(this.autocomplete);
    }
  }

  private initAutocomplete = async () => {
    const { Autocomplete } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
    this.autocomplete = new Autocomplete(this.inputField.nativeElement);
    this.autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        this.handleAutocompleteSelection();
      });
    });
  };

  private getPhotoUrl = (place: google.maps.places.PlaceResult | undefined): string | undefined => {
    return place?.photos && place?.photos.length > 0 ? place?.photos[0].getUrl({ maxWidth: 500 }) : undefined;
  };

  private handleAutocompleteSelection = () => {
    const place = this.autocomplete?.getPlace();
    const result: PlaceSearchResult = {
      address: this.inputField.nativeElement.value,
      name: place?.name,
      location: place?.geometry?.location,
      imageUrl: this.getPhotoUrl(place),
      iconUrl: place?.icon,
    };
    this.placesService.setPlace(result);
  }
}
