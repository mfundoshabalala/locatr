import { Injectable } from '@angular/core';
import { Maps } from '../interfaces/map.interface';
import { MarkerInterface } from '../interfaces/marker.interface';
import { MapService } from './maps.service';
import { DirectionsService } from './directions.service';

@Injectable({
  providedIn: 'root',
})
export class ButtonsService {
  constructor(private mapService: MapService, private directionsService: DirectionsService) {}

  handleShortestPath(): void {
    console.log('Calculating the shortest path...');
  }

  handleTurnByTurn(): void {
    console.log('Displaying turn-by-turn navigation...');
  }

  handleTrafficView(): void {
    this.mapService.trafficViewEnabled = !this.mapService.trafficViewEnabled;
  }

  handleAvoidTollRoads(): void {
    this.mapService.avoidTollRoads = !this.mapService.avoidTollRoads;
  }

  handleAvoidHighways(): void {
    this.mapService.avoidHighways = !this.mapService.avoidHighways;
  }

  handleLiveTracking(): void {
    console.log('Enabling live tracking...');
  }

  handleDrawGeofence(): void {
    console.log('Drawing a geofence...');
  }

  handleHeatmapView(): void {
    this.mapService.heatmapView = !this.mapService.heatmapView;
  }

  handleDrawCustomShapes(): void {
    console.log('Drawing custom shapes...');
  }

  handleOverlayDataLayers(): void {
    console.log('Overlaying data layers...');
  }

  handleSearchLocation(): void {
    console.log('Searching location...');
  }

  handleToggleLayer(): void {
    console.log('Toggling map layer...');
  }

  handleSwitchMapType(map: Maps | undefined): void {
    if (map?.getMapTypeId() === 'roadmap') {
      map?.setMapTypeId('terrain');
    } else if (map?.getMapTypeId() === 'terrain') {
      map?.setMapTypeId('hybrid');
    } else if (map?.getMapTypeId() === 'hybrid') {
      map?.setMapTypeId('satellite');
    } else {
      map?.setMapTypeId('roadmap');
    }
  }

  handleZoomIn(map: Maps | undefined): void {
    const zoom = map?.getZoom();
    if (zoom) map?.setZoom(zoom + 1);
  }

  handleZoomOut(map: Maps | undefined): void {
    const zoom = map?.getZoom();
    if (zoom) map?.setZoom(zoom - 1);
  }

  handleSafeRoutes(): void {
    console.log('Prioritizing safe routes...');
  }

  handleWheelchairAccessible(): void {
    console.log('Providing wheelchair-accessible routes...');
  }

  handleEmergencyServices(): void {
    console.log('Locating emergency services...');
  }

  handleFindMyLocation(map: Maps | undefined): void {
    const navigator = window.navigator.geolocation;
    navigator.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      map?.setCenter(pos);
    });
  }

  handleGetDirections(markers: MarkerInterface[]): void {
    this.directionsService.calculateDirections(markers);
  }

  handleMeasureDistance(): void {
    console.log('Measuring distance...');
  }

  handleMeasureArea(): void {
    console.log('Measuring area...');
  }

  handleSaveMapView(): void {
    console.log('Saving map view...');
  }

  handleShareMap(): void {
    console.log('Sharing map...');
  }

  handlePrintMap(): void {
    console.log('Printing map...');
  }

  handleAnnotateMap(): void {
    console.log('Annotating map...');
  }

  handleShareLiveMap(): void {
    console.log('Sharing live map...');
  }

  handleFitBounds(map: Maps | undefined, markers: MarkerInterface[]): void {
    if (!map) return;
    this.mapService.addMarkersToBounds(markers);
    this.mapService.fitMarkersToBounds();
  }
}
