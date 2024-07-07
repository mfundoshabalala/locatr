import { Injectable, signal } from '@angular/core';
import { PlaceSearchResult } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private placeSignal = signal<PlaceSearchResult | null>(null);

  get placeChangeSignal$() {
    return this.placeSignal;
  }

  setPlace(place: PlaceSearchResult) {
    this.placeSignal.set(place);
  }

  clearPlace() {
    this.placeSignal.set(null);
  }
}
