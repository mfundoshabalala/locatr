// map-viewer.component.ts (Using Signals)
import { Component, ViewEncapsulation, AfterViewInit, ViewChild, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';

import { MapSearchComponent } from '../map-search/map-search.component';
import { MapButtonPanelComponent } from '../map-button-panel/map-button-panel.component';
import { ToastService } from '@profolio/shared-ui';
import { PlacesService } from '../../services/places.service';
import { MarkerService } from '../../services/marker.service';
import { DirectionsService, MapService } from '../../services';
import { MarkerInterface } from '../../interfaces/marker.interface';

@Component({
  selector: 'lib-map-viewer',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, MapButtonPanelComponent, MapSearchComponent, FormsModule],
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild(GoogleMap) map!: GoogleMap;
  center: google.maps.LatLngLiteral = { lat: -30.5595, lng: 22.9375 };
  zoom = 7;
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom,
    clickableIcons: true,
    // draggable: false
  };

  markers: MarkerInterface[] = [];
  directions: google.maps.DirectionsResult | null = null;

  private mapService = inject(MapService);
  private directionsService = inject(DirectionsService);
  private placesService = inject(PlacesService);
  private markerService = inject(MarkerService);
  // private routeService = inject(RouteService);
  private toast = inject(ToastService);

  constructor() {
    this.setupReactivity();
  }
  ngAfterViewInit(): void {
    this.mapService.setMap(this.map);
  }

  private setupReactivity() {
    this.reactivePlaceChange();
    this.reactiveMarkerChange();
    this.reactiveDirectionChange();
  }

  onMapReady = (map: google.maps.Map): void => {
    console.log('Map ready', map);
    this.toast.showInfo('Map is ready');
  };

  private reactivePlaceChange() {
    effect(() => {
      const place = this.placesService.placeChangeSignal$();
      if (place?.location) {
        const marker = {
          position: {
            lat: place.location.lat(),
            lng: place.location.lng()
          },
          label: place.name
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
        this.toast.showSuccess('Directions calculated successfully!');
      }
    });
  }

  private reactiveMarkerChange() {
    effect(() => {
      this.markers = this.markerService.markersChangeSignal$();
      if (this.markers.length) {
        this.mapService.addMarkersToBounds(this.markers);
        this.mapService.fitMarkersToBounds(this.map);
      }
    });
  }
}
