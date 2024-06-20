import { Injectable } from '@angular/core';
import { MarkerInterface } from '../interfaces/marker.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  private markersSubject = new BehaviorSubject<MarkerInterface[]>([]);
  markers$ = this.markersSubject.asObservable();

  addNewMarker = (position: google.maps.LatLngLiteral): void => {
    const currentMarkers = this.markersSubject.getValue();
    const newMarker = {
      position: position,
      label: String.fromCharCode(65 + currentMarkers.length), // A, B, C, etc.
    };
    console.log('Marker added:', newMarker);
    this.markersSubject.next([...currentMarkers, newMarker]);
  };

  clearMarkers = (): void => {
    this.markersSubject.next([]);
  };
}