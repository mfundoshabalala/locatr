import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlaceSearchResult } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private placeSubject = new BehaviorSubject<PlaceSearchResult | null>(null);
  place$ = this.placeSubject.asObservable();

	setPlace = (place: PlaceSearchResult) => {
		this.placeSubject.next(place);
	}
}