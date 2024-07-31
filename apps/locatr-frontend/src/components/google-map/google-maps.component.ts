import { Component, ElementRef, viewChild, inject, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsService } from '../../services/google-maps.service';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [CommonModule],
  template: `<div #mapContainer id="map" class="map-container"></div>`,
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent {
  private googleMapsService = inject(GoogleMapsService);

  mapId = input.required<string>({ alias: 'id'});
  mapData = input<any[]>([], { alias: 'data' });
  mapContainer = viewChild<ElementRef>('mapContainer');

  constructor() {
    effect(async () => {
      await this.loadMap();
    });
  }

  private async loadMap() {
    if (this.mapContainer() && this.mapId()) {
      const element = this.mapContainer()?.nativeElement;
      await this.googleMapsService.loadMap(element, this.mapId());
      await this.googleMapsService.loadMapData(this.mapData());
    }
  }
}
