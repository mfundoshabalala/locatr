import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  addNewMarker(markers: any[], position: google.maps.LatLngLiteral): any[] {
    const newMarker = {
      position: position,
      label: String.fromCharCode(65 + markers.length), // A, B, C, etc.
    };
    console.log('Marker added:', newMarker);
    return [...markers, newMarker];
  }
}