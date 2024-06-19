import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { Subscription } from 'rxjs';
import { MapService } from '../../services/map.service';
import { MarkerService } from '../../services/marker.service';
import { RouteService } from '../../services/route.service';
import { BUTTONS_CONFIG } from '../../config/buttons-config';

@Component({
  selector: 'lib-map-legend',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapAdvancedMarker],
  templateUrl: './map-legend.component.html',
  styleUrl: './map-legend.component.css',
})
export class MapLegendComponent implements OnInit {
  @Input() map!: GoogleMap;
  @Input() markers: { position: google.maps.LatLngLiteral; label: string }[] = [];
  @Output() markersChange = new EventEmitter<{ position: google.maps.LatLngLiteral; label: string }[]>();

  directionsSubscription!: Subscription;
  buttons: { category: string; buttons: { clickHandler: () => any; label: string; icon: string; }[]; }[] | undefined;

  [Symbol.iterator]() {
    return this.markers[Symbol.iterator]();
  }

  selectedMarker?: google.maps.marker.AdvancedMarkerElement;

  constructor(
    private mapService: MapService,
    private markerService: MarkerService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    this.buttons = BUTTONS_CONFIG.map((category) => ({
      category: category.category,
      buttons: category.buttons.map((button) => ({
        ...button,
        clickHandler: this.getClickHandler(button.label),
      })),
    }));
  }
  private getClickHandler(label: string): () => void {
    switch (label) {
      case 'Refresh Map':
        return () => this.mapService.refreshMap(this.map);
      case 'Locate User':
        return () => this.mapService.centerOnUser(this.map);
      case 'Fit to Bounds':
        return () =>
          this.mapService.fitMarkersToView(
            this.map,
            this.markers.map((marker) => marker.position)
          );
      case 'Change Map Type':
        // return () => this.mapService.changeMapType(this.map, google.maps.MapTypeId.ROADMAP); // Example map type
        return () => this.mapService.changeMapType(this.map); // Example map type
      case 'Add Marker':
        return () => {
          this.markers = this.markerService.addNewMarker(this.markers, { lat: -30.3595, lng: 22.2375 });
          this.markersChange.emit(this.markers);
        };
      case 'Clear Markers':
        return () => {
          this.markers = [];
          this.markersChange.emit([])
        };
      case 'Route to Marker':
        return () => null;
      case 'Draw Route Between Markers':
        return () => {
          this.routeService.drawRouteBetweenMarkers(this.markers.map((marker) => marker.position));
        };
      case 'Toggle Traffic':
        return () => this.mapService.toggleTrafficLayer(this.map, new google.maps.TrafficLayer());
      case 'Import Data':
        return () => document.getElementById('fileInput')?.click();
      case 'Export Data':
        return () => console.log('Export Data method called'); // Implement the export logic as needed
      default:
        return () => console.warn('No handler defined for', label);
    }
  }
}
