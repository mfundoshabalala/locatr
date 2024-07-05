import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { effect } from '@angular/core';

import { ToastService } from '@profolio/shared-ui';
import { PlacesService } from '../../services/places.service';
import { MarkerService } from '../../services/markers.service';
import { DirectionsService, MapService } from '../../services';
import { MarkerInterface } from '../../interfaces/marker.interface';
import { MapViewerComponent } from '../map-viewer/map-viewer.component';
import { LatLngLiteral, DirectionsResult } from '../../interfaces/direction.interface';
import { MapOptions, Maps } from '../../interfaces/map.interface';

@Component({
  selector: 'lib-map-controller',
  standalone: true,
  imports: [CommonModule, FormsModule, MapViewerComponent],
  template: `
  <lib-map-viewer
    [center]="center"
    [zoom]="zoom"
    [options]="options"
    [markers]="markers"
    [directions]="directions">
  </lib-map-viewer>
  `,
})
export class MapControllerComponent {
  center: LatLngLiteral = { lat: -30.5595, lng: 22.9375 };
  zoom = 7;
  options: MapOptions = {
    center: this.center,
    zoom: this.zoom,
    clickableIcons: true,
  };

  map: Maps | undefined;
  markers: MarkerInterface[] = [];
  directions: DirectionsResult | null = null;

  private mapService = inject(MapService);
  private directionsService = inject(DirectionsService);
  private placesService = inject(PlacesService);
  private markerService = inject(MarkerService);
  private toast = inject(ToastService);

  constructor() {
    this.setupReactivity();
  }

  private setupReactivity() {
    this.reactivePlaceChange();
    this.reactiveMarkerChange();
    this.reactiveDirectionChange();
    this.reactiveMapChange();
  }

  private reactiveMapChange() {
    effect(
      () => {
        this.map = this.mapService.mapChangeSignal$();
        this.toast.showInfo('Map updated!');
      },
      { allowSignalWrites: true }
    );
  }

  private reactivePlaceChange() {
    effect(() => {
      const place = this.placesService.placeChangeSignal$();
      if (place?.location) {
        const marker = {
          position: {
            lat: place.location.lat(),
            lng: place.location.lng(),
          },
          label: place.name,
        };
        this.markerService.addNewMarker(marker);
      }
    });
  }

  private reactiveDirectionChange() {
    effect(() => {
      this.directions = this.directionsService.directionsChangeSignal$();
      if (this.directions) {
        this.markerService.clearMarkers();
        this.toast.showInfo('Directions calculated successfully!');
      }
    });
  }

  private reactiveMarkerChange() {
    effect(() => {
      this.markers = this.markerService.markersChangeSignal$();
      if (this.markers.length) {
        this.mapService.addMarkersToBounds(this.markers);
        this.mapService.fitMarkersToBounds();
      }
    });
  }
}
