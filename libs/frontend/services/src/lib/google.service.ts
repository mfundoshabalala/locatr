import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({ providedIn: 'root' })
export class GoogleService {
  loader!: Loader;
  private map: google.maps.Map | null = null;
  private readonly defaultMapOptions: google.maps.MapOptions = {
    center: { lat: -28.4793, lng: 24.6727 },
    zoom: 6,
  };

  constructor() {
    this.initializeLoader();
  }

  private initializeLoader(): void {
    this.loader = new Loader({
      apiKey: process.env["GOOGLE_MAP_API_KEY"] as string,
      version: 'beta',
      libraries: ['places', 'marker'],
    });
  }

  async loadMap(element: HTMLElement, mapId: string): Promise<void> {
    const { Map } = (await this.loader.importLibrary('maps')) as google.maps.MapsLibrary;
    this.map = new Map(element, {
      ...this.defaultMapOptions,
      mapId,
    });
  }

  private createMarker = async (markerData: any, markerLibrary: google.maps.MarkerLibrary) => {
    const { AdvancedMarkerElement, PinElement } = markerLibrary;
    const position = { lat: markerData.lat, lng: markerData.lng };
    const pinScaled = new PinElement({
      scale: 0.875,
    });

    const marker = new AdvancedMarkerElement({
      position,
      map: this.map,
      content: pinScaled.element,
      title: markerData.label,
      gmpClickable: true,
      collisionBehavior: google.maps.CollisionBehavior.REQUIRED,
    });

    // marker.addListener('click', ({ domEvent, latLng }) => {
    marker.addListener('click', ({ domEvent }: google.maps.MapMouseEvent) => {
      const { target } = domEvent;
      const infoWindow = new google.maps.InfoWindow();

      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });

    return position;
  };

  loadMapData = async (data: any) => {
    if (this.map && data?.length) {
      const markerLibrary = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;
      const bounds = new google.maps.LatLngBounds();

      for (const marker of data) {
        const position = await this.createMarker(marker, markerLibrary);
        bounds.extend(position);
      }

      // Animating the fitBounds action
      this.map.fitBounds(bounds);
      setTimeout(() => {
        this.map?.panToBounds(bounds);
      }, 1000);
    }
  };

  async initializeAutocomplete(
    element: HTMLInputElement,
    placeChangeCallback: (place: google.maps.places.PlaceResult) => void
  ): Promise<void> {
    await this.loader.importLibrary('places');
    const autocomplete = new google.maps.places.Autocomplete(element);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      placeChangeCallback(place);
    });
  }
}
