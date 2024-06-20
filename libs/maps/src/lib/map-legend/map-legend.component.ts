import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
// import { Subscription } from 'rxjs';
import { BUTTONS_CONFIG } from '../../config/buttons-config';
import { MarkerInterface } from '../../interfaces/marker.interface';
import { MapService, MarkerService, RouteService } from '../../services';

@Component({
  selector: 'lib-map-legend',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapAdvancedMarker],
  templateUrl: './map-legend.component.html',
  styleUrl: './map-legend.component.css',
})
export class MapLegendComponent implements OnInit {
  @Input() map!: GoogleMap;
  @Input() markers: MarkerInterface[] = [];
  @Output() markersChange = new EventEmitter<MarkerInterface[]>();

  // directionsSubscription!: Subscription;
  buttons: { category: string; buttons: { clickHandler: () => any; label: string; icon: string }[] }[] | undefined;

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
        return () => this.mapService.changeMapType(this.map); // Example map type
      case 'Add Marker':
        return () => this.markerService.addNewMarker({ lat: -30.3595, lng: 22.2375 });
      case 'Clear Markers':
        return () => this.markerService.clearMarkers();
      case 'Route to Marker':
        return () => null;
      case 'Draw Route Between Markers':
        return () => this.routeService.drawRouteBetweenMarkers(this.markers.map((marker) => marker.position));
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
