import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlaceSearchResult } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  // private placesSubject = new BehaviorSubject<google.maps.places.PlaceResult | null>(null);
  // public places$: Observable<google.maps.places.PlaceResult | null> = this.placesSubject.asObservable();

  // private setPlacesResult = (result: google.maps.places.PlaceResult) => {
  // 	this.placesSubject.next(result);
  // }

  // private clearPlacesResult = () => {
  // 	this.placesSubject.next(null);
  // }

  private placeSubject = new BehaviorSubject<PlaceSearchResult | null>(null);
  place$ = this.placeSubject.asObservable();

	setPlace = (place: PlaceSearchResult) => {
		this.placeSubject.next(place);
	}
}