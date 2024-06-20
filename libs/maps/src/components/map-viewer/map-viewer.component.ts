import { Component, ViewEncapsulation, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MapButtonPanelComponent } from '../map-button-panel/map-button-panel.component';
import { Subscription } from 'rxjs';
import { DirectionsService } from '../../services/directions.service';
import { FormsModule } from '@angular/forms';
import { MapSearchInputComponent } from '../map-search-input/map-search-input.component';
import { PlacesService } from '../../services/places.service';
import { MarkerService } from '../../services/marker.service';
import { MarkerInterface } from '../../interfaces/marker.interface';
import { MapService } from '../../services';
import { ToastService } from '@profolio/shared-ui';

@Component({
  selector: 'lib-map-viewer',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, MapButtonPanelComponent, MapSearchInputComponent, FormsModule],
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
    maxZoom: 15,
    minZoom: 4,
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
    private toast: ToastService
  ) {}

  ngAfterViewInit(): void {
    this.subscribeToMarkerChanges();
    this.subscribeToDirectionsResults();
    this.subscribeToPlacesResults();
  }

  private subscribeToMarkerChanges = () => {
    this.markersSubscription = this.markerService.markers$.subscribe((result) => {
      if (result && result.length !== 0) {
        console.log('Displaying marker results: ', result);
        this.mapService.fitMarkersToView(
          this.map,
          result.map((marker) => marker.position)
        );
      }
      this.markers = result;
    });
  };

  private subscribeToDirectionsResults = () => {
    this.directionsSubscription = this.directionsService.directions$.subscribe((result) => {
      if (result) {
        console.log('Displaying directions on the map: ', result);
        this.markerService.clearMarkers();
        this.directions = result;
        this.toast.showSuccess('Directions found');
      }
    });
  };

  private subscribeToPlacesResults = () => {
    this.placesSubscription = this.placesService.place$.subscribe((result) => {
      if (result && result.location) {
        this.markerService.addNewMarker({ lat: result.location.lat(), lng: result.location.lng() });
      }
    });
  };

  ngOnDestroy(): void {
    this.unsubscribeDirectionsSubscription();
    this.unsubscribePlacesSubscription();
    this.unsubscribeMarkersSubscription();
  }

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

  // private searchLocation(location: string) {
  //   const geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({ address: location }, (results, status) => {
  //     if (status === 'OK' && results && results[0]) {
  //       const position = results[0].geometry.location.toJSON();
  //       this.center = position;
  //       this.map.panTo(position);
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // }

  // moveMap(event: google.maps.MapMouseEvent) {
  //   if (event.latLng) this.center = event.latLng.toJSON();
  // }

  // move(event: google.maps.MapMouseEvent) {
  //   if (event.latLng) this.display = event.latLng.toJSON();
  // }
}
