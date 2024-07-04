import { inject, Injectable, signal } from '@angular/core';
import { ToastService } from '@profolio/shared-ui';
import { MarkerInterface } from '../interfaces/marker.interface';
import { GoogleMap } from '@angular/google-maps';
import { MapService } from './map.service';
import { DirectionsRequest, DirectionsResult, DirectionsStatus, DirectionsWaypoint, LatLngLiteral, TravelMode } from '../interfaces/direction.interface';

declare let google: any;
@Injectable({
  providedIn: 'root',
})
export class DirectionsService {
  private readonly toast = inject(ToastService);
  private readonly map = inject(MapService);

  private directionsSignal = signal<DirectionsResult | null>(null);

  get directionsChangeSignal$() {
    return this.directionsSignal;
  }

  setDirections(directions: DirectionsResult) {
    this.directionsSignal.set(directions);
  }

  clearDirections() {
    this.directionsSignal.set(null);
  }

  initializeDirections = (map: GoogleMap, strokeColor: string) => {
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: strokeColor,
      },
    });
    directionsDisplay.setMap(map);
    return { directionsService, directionsDisplay };
  };

  calculateDirections = (markers: MarkerInterface[], travelMode?: TravelMode) => {
    const directionsService = new google.maps.DirectionsService();
    const origin: LatLngLiteral = markers[0].position;
    const destination: LatLngLiteral = markers[markers.length - 1].position;
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
        this.setDirections(result);
        markers = [];
      } else {
        this.toast.showError('Directions request failed');
        this.clearDirections();
      }
    });
  };
}
