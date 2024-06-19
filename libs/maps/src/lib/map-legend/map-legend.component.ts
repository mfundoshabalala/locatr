import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, MapAdvancedMarker, MapDirectionsService } from '@angular/google-maps';
import { Subscription, map } from 'rxjs';
import { DirectionsService } from '../directions.service';

@Component({
  selector: 'lib-map-legend',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapAdvancedMarker],
  templateUrl: './map-legend.component.html',
  styleUrl: './map-legend.component.css',
})
export class MapLegendComponent implements OnInit, OnDestroy {
  @Input() map!: GoogleMap;
  @Input() markers: { position: google.maps.LatLngLiteral; label: string }[] = [];
  @Output() markersChange = new EventEmitter<{ position: google.maps.LatLngLiteral; label: string }[]>();

  directionsSubscription!: Subscription;

  [Symbol.iterator]() {
    return this.markers[Symbol.iterator]();
  }

  selectedMarker?: google.maps.marker.AdvancedMarkerElement;
  buttons = [
    {
      category: 'Map',
      buttons: [
        { label: 'Refresh Map', clickHandler: () => this.refreshMap(), icon: '🔄' },
        { label: 'Locate User', clickHandler: () => this.centerOnUser(), icon: '📍' },
        { label: 'Fit to Bounds', clickHandler: () => this.fitMarkersToView(), icon: '🔍' },
        { label: 'Change Map Type', clickHandler: () => this.changeMapType(), icon: '🗺️' },
      ],
    },
    {
      category: 'Markers',
      buttons: [
        { label: 'Add Marker', clickHandler: () => this.addNewMarker(), icon: '➕' },
        { label: 'Clear Markers', clickHandler: () => this.clearMarkers(), icon: '🗑️' },
      ],
    },
    {
      category: 'Routes',
      buttons: [
        { label: 'Route to Marker', clickHandler: () => this.calculateRouteToMarker(this.selectedMarker), icon: '🚗' },
        { label: 'Draw Route Between Markers', clickHandler: () => this.drawRouteBetweenMarkers(), icon: '🚧' },
      ],
    },
    {
      category: 'Traffic',
      buttons: [{ label: 'Toggle Traffic', clickHandler: () => this.toggleTrafficLayer(), icon: '🚦' }],
    },
    {
      category: 'Data',
      buttons: [
        { label: 'Import Data', clickHandler: () => document.getElementById('fileInput')?.click(), icon: '📂' },
        { label: 'Export Data', clickHandler: () => this.exportMapData(), icon: '💾' },
      ],
    },
  ];

  constructor(private directionsService: DirectionsService) {}

  ngOnInit(): void {
    // Subscribe to the directions observable
    this.directionsSubscription = this.directionsService.directions$.subscribe((result) => {
      if (result) {
        // Handle the result, e.g., logging or additional processing
        console.log('Directions result received in MapLegendComponent:', result);
        // Optionally, send back the processed result
        // this.directionsService.setDirectionsResult(processedResult);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.directionsSubscription) {
      this.directionsSubscription.unsubscribe();
    }
  }

  refreshMap = () => {
    if (this.map && this.map.googleMap) {
      const center = this.map.googleMap.getCenter();
      if (center) {
        this.map.googleMap.setCenter(center);
      }
      console.log('Map refreshed');
    }
  };

  centerOnUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Center the map on the user's location
          if (this.map) {
            this.map.googleMap?.setCenter(userLocation);
            console.log('Map centered on user location:', userLocation);

            // Optionally, add a marker at the user's location with a car or human emoji
            const userMarker = {
              position: userLocation,
              label: '🚶',
            };
            this.markers = [...this.markers, userMarker];
            this.markersChange.emit(this.markers);
          }
        },
        (error) => {
          console.error('Geolocation failed: ', error);
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      alert('Geolocation is not supported by your browser.');
    }
  }

  addNewMarker() {
    const newMarker = {
      position: { lat: -30.3595, lng: 22.2375 },
      label: String.fromCharCode(65 + this.markers.length),
    };

    this.markers = [...this.markers, newMarker];
    this.markersChange.emit(this.markers);
  }

  clearMarkers() {
    this.markers = [];
    this.markersChange.emit(this.markers);
  }

  fitMarkersToView() {
    if (this.map && this.markers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      this.markers.forEach((marker) => bounds.extend(marker.position));
      this.map.googleMap?.fitBounds(bounds);
    }
  }

  toggleTrafficLayer() {
    throw new Error('Method not implemented.');
  }

  calculateRouteToMarker(selectedMarker?: google.maps.marker.AdvancedMarkerElement) {
    if (!selectedMarker) return;
    throw new Error('Method not implemented.');
  }

  changeMapType() {
    if (this.map) {
      const currentType = this.map.googleMap?.getMapTypeId();
      const nextType = currentType === 'roadmap' ? 'satellite' : 'roadmap';
      this.map.googleMap?.setMapTypeId(nextType);
      console.log('Map type changed to:', nextType);
    }
  }

  drawRouteBetweenMarkers() {
    if (this.markers.length < 2) {
      alert('Please add at least two markers to draw a route between them.');
      return;
    }

    const origin = this.markers[0].position;
    const destination = this.markers[this.markers.length - 1].position;
    const waypoints = this.markers.slice(1, -1).map((marker) => ({
      location: marker.position,
      stopover: true,
    }));

    // Call the service to calculate directions
    this.directionsService.calculateDirections(origin, destination, waypoints);
  }

  exportMapData() {
    throw new Error('Method not implemented.');
  }
}
