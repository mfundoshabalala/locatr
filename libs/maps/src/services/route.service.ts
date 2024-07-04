import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectionsService } from './directions.service';
import { ToastService } from '@profolio/shared-ui';
import { DirectionsResult } from '../interfaces/direction.interface';
import { MarkerInterface } from '../interfaces/marker.interface';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  avoidHighways = false;
  avoidTollRoads = false;

  constructor(private directionsService: DirectionsService, private toastr: ToastService) {}

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

  drawRouteBetweenMarkers = (markers: MarkerInterface[]): void | Observable<DirectionsResult | undefined> => {
    if (markers.length < 2) {
      this.toastr.showError('Please add at least two markers to draw a route between them.');
      return new Observable<DirectionsResult | undefined>();
    }

    this.directionsService.calculateDirections(markers);
  };

  toggleAvoidHighWays = () => {
    this.avoidHighways = !this.avoidHighways;
  };

  toggleAvoidTollRoads = () => {
    this.avoidTollRoads = !this.avoidTollRoads;
  };

  enableTrafficView = (map: google.maps.Map) => {
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  };
}