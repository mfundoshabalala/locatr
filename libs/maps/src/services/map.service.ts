import { Injectable } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  refreshMap = (map: GoogleMap) => {
    if (map && map.googleMap) {
      const center = map.googleMap.getCenter();
      if (center) {
        map.googleMap.setCenter(center);
      }
      console.log('Map refreshed');
    }
  };

  changeMapType = (map: GoogleMap) => {
    if (map) {
      const currentType = map.googleMap?.getMapTypeId();
      const nextType = currentType === 'roadmap' ? 'satellite' : 'roadmap';
      map.googleMap?.setMapTypeId(nextType);
      console.log('Map type changed to:', nextType);
    }
  };

  toggleTrafficLayer(map: GoogleMap, trafficLayer: google.maps.TrafficLayer): void {
    if (map && map.googleMap) {
      trafficLayer.setMap(map.googleMap);
      console.log('Traffic layer toggled');
    }
  }

  centerOnUser = (map: GoogleMap) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Center the map on the user's location
          if (map) {
            map.googleMap?.setCenter(userLocation);
            console.log('Map centered on user location:', userLocation);

            // // Optionally, add a marker at the user's location with a car or human emoji
            // const userMarker = {
            //   position: userLocation,
            //   label: '🚶',
            // };
            // this.markers = [...this.markers, userMarker];
            // this.markersChange.emit(this.markers);
          }
        },
        (error) => {
          console.error('Geolocation failed: ', error);
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      alert('Geolocation is not supported by your browser.');
    }
  };

  fitMarkersToView = (map: GoogleMap, markers: any[]) => {
    if (map && markers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach((position) => bounds.extend(position));
      map.googleMap?.fitBounds(bounds);
    }
  }
}