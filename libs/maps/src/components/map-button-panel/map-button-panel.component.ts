import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { BUTTONS_CONFIG } from '../../configs/buttons-config';
import { MarkerInterface } from '../../interfaces/marker.interface';
import { MapService, MarkerService, RouteService } from '../../services';

@Component({
  selector: 'lib-map-button-panel',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapAdvancedMarker],
  templateUrl: './map-button-panel.component.html',
  styleUrl: './map-button-panel.component.css',
})
export class MapButtonPanelComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() map!: GoogleMap;
  buttons: { category: string; buttons: { clickHandler: () => any; label: string; icon: string }[] }[] | undefined;

  markersSubscription!: Subscription;
  markers: MarkerInterface[] = [];
  // selectedMarker?: google.maps.marker.AdvancedMarkerElement;

  constructor(
    private mapService: MapService,
    private markerService: MarkerService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    this.buttons = this.createMapButtons();
  }

  ngAfterViewInit(): void {
    this.subscribeToMarkerChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribeMarkersSubscription();
  }

  private subscribeToMarkerChanges = () => {
    this.markersSubscription = this.markerService.markers$.subscribe((result) => {
      this.markers = result;
    });
  };

  private unsubscribeMarkersSubscription() {
    if (this.markersSubscription) {
      this.markersSubscription.unsubscribe();
    }
  }

  private createMapButtons() {
    return BUTTONS_CONFIG.map((category) => ({
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
        return () => this.mapService.changeMapType(this.map);
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
        // TODO: implement import data method
        return () => document.getElementById('fileInput')?.click();
      case 'Export Data':
        // TODO: implement export data method
        return () => console.log('Export Data method called');
      default:
        return () => console.warn('No handler defined for', label);
    }
  }
}
