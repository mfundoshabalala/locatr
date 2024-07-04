import { Component, ViewEncapsulation, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { Subscription } from 'rxjs';
import { DirectionsResult, DirectionsService } from '../../services/directions.service';
import { FormsModule } from '@angular/forms';

import { MapSearchComponent } from '../map-search/map-search.component';
import { MapButtonPanelComponent } from '../map-button-panel/map-button-panel.component';
import { ToastService } from '@profolio/shared-ui';
import { PlacesService } from '../../services/places.service';
import { MarkerService } from '../../services/marker.service';
import { MapService, RouteService } from '../../services';
import { MarkerInterface } from '../../interfaces/marker.interface';
import { PlaceSearchResult } from '../../interfaces/places.interface';

@Component({
  selector: 'lib-map-viewer',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, MapButtonPanelComponent, MapSearchComponent, FormsModule],
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MapViewComponent implements AfterViewInit, OnDestroy {
  @ViewChild(GoogleMap) map!: GoogleMap;
  center: google.maps.LatLngLiteral = { lat: -30.5595, lng: 22.9375 };
  zoom = 7;
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom,
    clickableIcons: true,
    // draggable: false
  };

  placesSubscription!: Subscription;
  markersSubscription!: Subscription;
  directionsSubscription!: Subscription;

  markers: MarkerInterface[] = [];
  directions: google.maps.DirectionsResult | undefined;

  constructor(
    private directionsService: DirectionsService,
    private placesService: PlacesService,
    private markerService: MarkerService,
    private mapService: MapService,
    private routeService: RouteService,
    private toast: ToastService
  ) {}

  ngAfterViewInit(): void {
    this.mapService.setMap(this.map);
    this.setupSubscriptions();
  }

  private setupSubscriptions() {
    this.subscribeToMarkerChanges();
    this.subscribeToPlacesResults();
    this.subscribeToDirectionsResults();
  }

  ngOnDestroy(): void {
    this.unsubscribePlacesSubscription();
    this.unsubscribeMarkersSubscription();
    this.unsubscribeDirectionsSubscription();
  }

  private subscribeToMarkerChanges = () => {
    this.markersSubscription = this.markerService.markers$.subscribe((markers) => {
      this.handleMarkerSubscription(markers);
    });
  };

  private handleMarkerSubscription = (markers: MarkerInterface[]) => {
    this.markers = markers;
    if (markers && markers.length) {
      this.mapService.addMarkersToBounds(markers);
      this.mapService.fitMarkersToBounds(this.map);
      // this.routeService.drawRouteBetweenMarkers(markers);
    }
  };

  private subscribeToDirectionsResults = () => {
    this.directionsSubscription = this.directionsService.directions$.subscribe((directions) => {
      return this.handleDirectionSubscription(directions);
    });
  };

  private handleDirectionSubscription = (directions: DirectionsResult | null) => {
    if (directions) {
      this.markerService.clearMarkers();
      this.directions = directions;
      this.toast.showSuccess('Directions calculated successfully!');
    }
  };

  private subscribeToPlacesResults = () => {
    this.placesSubscription = this.placesService.place$.subscribe((place) => {
      this.handlePlaceSubscription(place);
    });
  };

  private handlePlaceSubscription = (place: PlaceSearchResult | null) => {
    if (place && place.location) {
      this.markerService.addNewMarker({ lat: place.location.lat(), lng: place.location.lng() });
    }
  };

  private unsubscribeDirectionsSubscription() {
    if (this.directionsSubscription) {
      this.directionsSubscription.unsubscribe();
    }
  }

  private unsubscribePlacesSubscription() {
    if (this.placesSubscription) {
      this.placesSubscription.unsubscribe();
    }
  }

  private unsubscribeMarkersSubscription() {
    if (this.markersSubscription) {
      this.markersSubscription.unsubscribe();
    }
  }

  onMapReady = (map: google.maps.Map): void => {
    console.log('Map ready', map);
    this.toast.showInfo('Map is ready');
  };
}
