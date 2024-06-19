import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, MapAdvancedMarker, MapDirectionsRenderer } from '@angular/google-maps';
import { MapLegendComponent } from '../map-legend/map-legend.component';
import { Observable, Subscription } from 'rxjs';
import { DirectionsService } from '../directions.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-map',
  standalone: true,
  imports: [GoogleMap, CommonModule, MapLegendComponent, MapAdvancedMarker, MapDirectionsRenderer, FormsModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild('locationInput') locationInput!: ElementRef;

  location = '';
  center: google.maps.LatLngLiteral = { lat: -30.5595, lng: 22.9375 };
  zoom = 7;
  display?: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom,
    maxZoom: 15,
    minZoom: 4,
  };
  selectedMarker?: google.maps.marker.AdvancedMarkerElement;
  directionsResults$!: Observable<google.maps.DirectionsResult | null>;
  directionsSubscription!: Subscription;

  constructor(private directionsService: DirectionsService) {}
  markers = [
    { position: { lat: -30.5595, lng: 22.9375 }, label: 'A' },
    { position: { lat: -30.543, lng: 21.9375 }, label: 'B' },
    { position: { lat: -30.6595, lng: 23.9375 }, label: 'C' },
  ];

  ngAfterViewInit(): void {
    console.log('Map component view initialized');

    this.directionsSubscription = this.directionsResults$.subscribe((result) => {
      if (result) {
        console.log('Displaying directions on the map:', result);
        // Optionally handle displaying the directions on the map
        // Use a <map-directions-renderer> to display the route
      }
    });
  }

  ngOnDestroy(): void {
    if (this.directionsSubscription) {
      this.directionsSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    console.log('Map component initialized');
    // Subscribe to the directions result from the service
    this.directionsResults$ = this.directionsService.directions$;
  }

  onMapReady(map: google.maps.Map): void {
    console.log('Map ready', map);
  }

  searchLocation(location: string) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const position = results[0].geometry.location.toJSON();
        this.center = position;
        this.map.panTo(position);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng) this.display = event.latLng.toJSON();
  }
}
