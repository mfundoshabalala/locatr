import { Injectable, signal } from '@angular/core';
import { MarkerInterface } from '../interfaces/marker.interface';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  protected _markers = [
    { position: { lat: -33.927383, lng: 18.451755 }, label: 'Marker 1' },
    { position: { lat: -34.031789, lng: 18.358893 }, label: 'Marker 2' },
    { position: { lat: -33.726478, lng: 18.638291 }, label: 'Marker 3' },
    { position: { lat: -34.148392, lng: 18.934572 }, label: 'Marker 4' },
    { position: { lat: -33.672899, lng: 18.781245 }, label: 'Marker 5' },
    { position: { lat: -33.986712, lng: 18.47238 }, label: 'Marker 6' },
    // { position: { lat: -34.122034, lng: 18.653945 }, label: 'Marker 7' },
    { position: { lat: -33.945678, lng: 18.721345 }, label: 'Marker 8' },
    { position: { lat: -33.587912, lng: 18.933678 }, label: 'Marker 9' },
    { position: { lat: -34.205678, lng: 18.349876 }, label: 'Marker 10' },
  ];

  private markersSignal = signal<MarkerInterface[]>(this._markers);

  get markersChangeSignal$() {
    return this.markersSignal;
  }

  addNewMarker(marker: MarkerInterface) {
    this.markersChangeSignal$.update((markers: MarkerInterface[]) => [...markers, marker]);
  }

  clearMarkers() {
    this.markersChangeSignal$.set([]);
  }
}