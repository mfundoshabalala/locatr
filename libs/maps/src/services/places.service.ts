import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PlacesService {
	private placesSubject = new BehaviorSubject<google.maps.places.PlaceResult | null>(null);
	public places$: Observable<google.maps.places.PlaceResult | null> = this.placesSubject.asObservable();

	private setPlacesResult = (result: google.maps.places.PlaceResult) => {
		this.placesSubject.next(result);
	}

	private clearPlacesResult = () => {
		this.placesSubject.next(null);
	}

	getPlaceDetailsByString = (placeId: string) => {
		// const placesService = new google.maps.places.PlacesService(document.createElement('div'));
		// placesService.getDetails({ placeId }, (
		// 	result: google.maps.places.PlaceResult,
		// 	status: google.maps.places.PlacesServiceStatus
		// ) => {
		// 	if (status === google.maps.places.PlacesServiceStatus.OK && result) {
		// 		this.setPlacesResult(result);
		// 	} else {
		// 		console.error('Places request failed due to ' + status);
		// 		this.clearPlacesResult();
		// 	}
		// });
	}
}