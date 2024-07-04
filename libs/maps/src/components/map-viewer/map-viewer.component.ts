import { Component, Input, ViewEncapsulation, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MapService } from '../../services';
import { LatLngLiteral, DirectionsResult } from '../../interfaces/direction.interface';
import { MapOptions, Maps } from '../../interfaces/map.interface';
import { MarkerInterface } from '../../interfaces/marker.interface';

@Component({
  selector: 'lib-map-viewer',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MapViewerComponent {
  @Input() center: LatLngLiteral = { lat: -30.5595, lng: 22.9375 };
  @Input() zoom = 7;
  @Input() options: MapOptions = {};
  @Input() markers: MarkerInterface[] = [];
  @Input() directions: DirectionsResult | null = null;
  @ViewChild(GoogleMap) map!: GoogleMap;

  private mapService = inject(MapService);

  onMapReady(map: Maps) {
    this.mapService.setMap(map);
  }
}
