import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectionsService } from './directions.service';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private directionsService: DirectionsService) {}

  // calculateRouteToMarker(
  //   origin: google.maps.LatLngLiteral,
  //   destination: google.maps.LatLngLiteral
  // ): Observable<google.maps.DirectionsResult | undefined> {
  //   const request: google.maps.DirectionsRequest = {
  //     origin: origin,
  //     destination: destination,
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   };
  //  return this.directionsService.route(request).pipe(map((response) => response.result));
  // }

  drawRouteBetweenMarkers = (markers: google.maps.LatLngLiteral[]): void | Observable<google.maps.DirectionsResult | undefined> => {
    if (markers.length < 2) {
      alert('Please add at least two markers to draw a route between them.');
      return new Observable<google.maps.DirectionsResult | undefined>();
    }

    const origin = markers[0];
    const destination = markers[markers.length - 1];
    const waypoints = markers.slice(1, -1).map((marker) => ({
      location: marker,
      stopover: true,
    }));

    return this.directionsService.calculateDirections(origin, destination, waypoints);
  }
}