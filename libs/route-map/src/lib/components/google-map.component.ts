import { Component, effect, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapService } from '../services/google-map.service';
import { MarkerInterface } from './route-manager/route-manager.component';

@Component({
  selector: 'lib-google-map',
  standalone: true,
  imports: [CommonModule],
  template: `<div #mapContainer id="map" class="map-container"></div>`,
  styles: [`
  .map-container {
    @apply w-full h-full p-1 border rounded-md shadow-sm;
  }
  `]
})
export class GoogleMapComponent {
  @Input() mapId = 'route-map';
  @Input() set routeData(data: MarkerInterface[]) {
    this.mapData = data;
    this.loadMapData();
  }

  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  private mapService = inject(GoogleMapService);
  private mapData: MarkerInterface[] = [];
  private mapInitialized = false;

  constructor() {
    effect(async () => {
      await this.loadMap();
    });
  }

  private async loadMap() {
    if (this.mapContainer && this.mapId) {
      const element = this.mapContainer.nativeElement;
      await this.mapService.loadMap(element, this.mapId);
      this.mapInitialized = true;
      this.loadMapData(); // Ensure map data is loaded after map initialization
    }
  }

  private async loadMapData() {
    if (this.mapInitialized && this.mapData.length > 0) {
      await this.mapService.loadMapData(this.mapData);
    }
  }
}
