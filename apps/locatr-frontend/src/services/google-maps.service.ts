import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({ providedIn: 'root' })
export class GoogleMapsService {
  private loader!: Loader;
  private apiKey = 'AIzaSyBC_xFYzPzcK2zQoVAvwk93X1lNFzXuU_U';
  private options: google.maps.MapOptions = {
    center: { lat: -28.4793, lng: 24.6727 }, // NOTE: Center of South Africa
    zoom: 6,
    minZoom: 6,
  };
  map: google.maps.Map | null = null;

  constructor() {
    this.loader = new Loader({
      apiKey: this.apiKey,
      version: 'weekly',
      libraries: ['places'],
    });
  }

  loadMap = async (element: HTMLElement, mapId: string): Promise<google.maps.Map | null> => {
    const { Map } = (await this.loader.importLibrary('maps')) as google.maps.MapsLibrary;
    const map = new Map(element, {
      ...this.options,
      mapId: mapId,
    });
    return map;
  };
}