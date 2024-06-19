// directions.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare let google: any;
@Injectable({
  providedIn: 'root',
})
export class DirectionsService {
  private directionsSubject = new BehaviorSubject<google.maps.DirectionsResult | null>(null);
  public directions$: Observable<google.maps.DirectionsResult | null> = this.directionsSubject.asObservable();

  private setDirectionsResult(result: google.maps.DirectionsResult) {
    this.directionsSubject.next(result);
  }

  private clearDirectionsResult() {
    this.directionsSubject.next(null);
  }

  calculateDirections(
    origin: google.maps.LatLngLiteral,
    destination: google.maps.LatLngLiteral,
    waypoints?: google.maps.DirectionsWaypoint[],
    travelMode?: google.maps.TravelMode
  ) {
    const directionsService = new google.maps.DirectionsService();
    const request: google.maps.DirectionsRequest = {
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      travelMode: travelMode || google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (
			result: google.maps.DirectionsResult,
			status: google.maps.DirectionsStatus
		) => {
      if (status === google.maps.DirectionsStatus.OK && result) {
        this.setDirectionsResult(result);
      } else {
        console.error('Directions request failed due to ' + status);
        this.clearDirectionsResult();
      }
    });
  }
}
