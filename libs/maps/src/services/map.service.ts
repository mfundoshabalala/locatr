import { Injectable, signal, WritableSignal } from '@angular/core';
import { LatLngBounds, LatLngLiteral } from '../interfaces/direction.interface';
import { Maps } from '../interfaces/map.interface';
import { MarkerInterface } from '../interfaces/marker.interface';

declare const google: any;
@Injectable({
  providedIn: 'root',
})
export class MapService {
  avoidHighways = false;
  avoidTollRoads = false;
  trafficViewEnabled = false;
  heatmapView = false;
  private readonly bounds!: LatLngBounds;

  constructor() {
    this.bounds = new google.maps.LatLngBounds();
  }

  private readonly mapSignal = signal<Maps | undefined>(undefined);

  get mapChangeSignal$(): WritableSignal<Maps | undefined> {
    return this.mapSignal;
  };

  setMap = (map: Maps): void => {
    this.mapSignal.set(map);
  }

  private addLatLngToBounds(latlng: LatLngLiteral): void {
    const latLng = new google.maps.LatLng(latlng);
    this.bounds.extend(latLng);
  }

  addMarkersToBounds = (markers: MarkerInterface[]): void => {
    for (const marker of markers) {
      this.addLatLngToBounds(marker.position);
    }
  };

  fitMarkersToBounds = (): void => {
    const map = this.mapChangeSignal$();
    map?.fitBounds(this.bounds);
  };
}

