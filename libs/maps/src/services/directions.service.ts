// directions.service.ts
import { Injectable } from '@angular/core';
import { ToastService } from '@profolio/shared-ui';
import { BehaviorSubject, Observable } from 'rxjs';
import { MarkerInterface } from '../interfaces/marker.interface';
import { GoogleMap } from '@angular/google-maps';
import { MapService } from './map.service';

declare let google: any;
@Injectable({
  providedIn: 'root',
})
export class DirectionsService {
  private readonly directionsSubject = new BehaviorSubject<DirectionsResult | null>(null);
  public readonly directions$: Observable<DirectionsResult | null> = this.directionsSubject.asObservable();

  private setDirectionsResult(result: DirectionsResult) {
    this.directionsSubject.next(result);
  }

  private clearDirectionsResult() {
    this.directionsSubject.next(null);
  }

  constructor(private toast: ToastService, private map: MapService) {}

  initializeDirections = (map: GoogleMap, strokeColor:string) => {
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: strokeColor,
      },
    });
    directionsDisplay.setMap(map);
    return { directionsService, directionsDisplay };
  }

  calculateDirections = (markers:MarkerInterface[], travelMode?: TravelMode) => {
    const directionsService = new google.maps.DirectionsService();
    const origin: LatLngLiteral = markers[0].position;
    const destination: LatLngLiteral = markers[markers.length-1].position;
    const waypoints: DirectionsWaypoint[] = markers.slice(1, -1).map((marker) => ({
      location: marker.position,
      stopover: true,
    }));

    const request: DirectionsRequest = {
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      optimizeWaypoints: true,
      avoidHighways: this.map.avoidHighways,
      avoidFerries: true,
      avoidTolls: this.map.avoidTollRoads,
      drivingOptions: {
        departureTime: new Date(),
      },
      travelMode: travelMode || google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result: DirectionsResult, status: DirectionsStatus) => {
      if (status === google.maps.DirectionsStatus.OK && result) {
        this.toast.showSuccess('Directios request successful');
        this.setDirectionsResult(result);
        markers = [];
      } else {
        this.toast.showError('Directions request failed');
        this.clearDirectionsResult();
      }
    });
  }
}


export type TravelMode = google.maps.TravelMode;
export type LatLngLiteral = google.maps.LatLngLiteral;
export type DirectionsResult = google.maps.DirectionsResult;
export type DirectionsStatus = google.maps.DirectionsStatus;
export type DirectionsRequest = google.maps.DirectionsRequest;
export type DirectionsWaypoint = google.maps.DirectionsWaypoint;