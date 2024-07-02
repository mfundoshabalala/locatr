import { Injectable } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MarkerInterface } from '../interfaces/marker.interface';
import { LatLngLiteral } from './directions.service';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  avoidHighways = false;
  avoidTollRoads = false;
  trafficViewEnabled = false;
  heatmapView = false;
  private map: GoogleMap | undefined;
  private readonly bounds!: google.maps.LatLngBounds;

  constructor() {
    this.bounds = new google.maps.LatLngBounds();
  }

  getMap = (): GoogleMap | undefined => {
    return this.map;
  };

  setMap = (map: GoogleMap): void => {
    this.map = map;
  };

  addLatLngToBounds(latlng: LatLngLiteral): void {
    const latLng = new google.maps.LatLng(latlng);
    this.bounds.extend(latLng);
  }

  addMarkersToBounds = (markers: MarkerInterface[]) => {
    for (const marker of markers) {
      this.addLatLngToBounds(marker.position);
    }
  };

  fitMarkersToBounds = (map: GoogleMap) => {
    map.fitBounds(this.bounds);
  };
}