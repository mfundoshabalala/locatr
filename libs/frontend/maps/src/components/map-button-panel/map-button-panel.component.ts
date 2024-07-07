import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, effect } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
//
import { BUTTONS_CONFIG } from '../../configs/buttons-config';
import { DirectionsService, MapService, MarkerService } from '../../services';

import { Glyph, Maps } from '../../interfaces/map.interface';
import { ButtonInterface } from '../../interfaces/button.interface';
import { LatLngLiteral } from '../../interfaces/direction.interface';
import { AdvancedMarkerElement, MarkerInterface } from '../../interfaces/marker.interface';

export interface CategorisedButton {
  category: string;
  buttons: ButtonInterface[];
}
@Component({
  selector: 'lib-map-button-panel',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapAdvancedMarker, FontAwesomeModule],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        query('.button', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          stagger('100ms', [animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))]),
        ]),
      ]),
    ]),
  ],
  templateUrl: './map-button-panel.component.html',
  styleUrl: './map-button-panel.component.css',
})
export class MapButtonPanelComponent implements OnInit {
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  activeCategoryIndex = 0;
  markers: MarkerInterface[] = [];
  map: Maps | undefined;
  buttons: CategorisedButton[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;

  private mapService = inject(MapService);
  private markerService = inject(MarkerService);
  // private routeService = inject(RouteService);
  private directionService = inject(DirectionsService);

  constructor() {
    this.setupMarkerReactivity();
    this.reactiveMapChange();
  }

  ngOnInit(): void {
    this.buttons = BUTTONS_CONFIG;
  }

  private setupMarkerReactivity() {
    effect(() => {
      this.markers = this.markerService.markersChangeSignal$();
      console.log('Markers updated:', this.markers);
    });
  }

  private reactiveMapChange() {
    effect(() => {
      this.map = this.mapService.mapChangeSignal$();
      console.log('Map updated:', this.map);
    });
  }

  toggleCategory = (index: number) => {
    if (this.activeCategoryIndex !== index) {
      this.activeCategoryIndex = index;
    }
  };

  handleButtonClick = (handlerName: string): void => {
    if (this[handlerName]) {
      this[handlerName]();
    } else {
      console.warn(`Handler ${handlerName} is not defined.`);
    }
  };

  handleShortestPath = (): void => {
    // Logic to calculate the shortest path between points.
    console.log('Calculating the shortest path...');
    // Add your route optimization algorithm or API call here.
  };

  handleTurnByTurn = (): void => {
    // Logic to display turn-by-turn navigation.
    console.log('Displaying turn-by-turn navigation...');
    // Add your navigation logic here.
  };

  handleTrafficView = (): void => {
    this.mapService.trafficViewEnabled = !this.mapService.trafficViewEnabled;
  };

  handleSelectVehicleType(): void {
    // Logic to select vehicle-specific routing.
    console.log('Selecting vehicle type...');
    // Add your vehicle-specific routing logic here.
  }

  handleAvoidTollRoads = (): void => {
    this.mapService.avoidTollRoads = !this.mapService.avoidTollRoads;
  };

  handleAvoidHighways = (): void => {
    this.mapService.avoidHighways = !this.mapService.avoidHighways;
  };

  handleLiveTracking(): void {
    // Logic to enable live tracking of the user's location.
    console.log('Enabling live tracking...');
    // Use geolocation API to track the user's location in real-time.
  }

  handleDrawGeofence(): void {
    // Logic to draw a geofence on the map.
    console.log('Drawing a geofence...');
    // Implement geofencing tool or drawing feature.
  }

  handleHeatmapView = (): void => {
    this.mapService.heatmapView = !this.mapService.heatmapView;
  };

  handleDrawCustomShapes(): void {
    // Logic to draw custom shapes on the map.
    console.log('Drawing custom shapes...');
    // Enable shape drawing tools (polygons, lines, etc.).
  }

  handleOverlayDataLayers(): void {
    // Logic to overlay external data layers on the map.
    console.log('Overlaying data layers...');
    // Integrate and display external data sources on the map.
  }

  handleSearchLocation(): void {
    // Logic to search for a location on the map.
    console.log('Searching location...');
    // Integrate with a geocoding service or search API.
  }

  handleToggleLayer(): void {
    // Logic to toggle map layers on/off.
    console.log('Toggling map layer...');
    // Implement layer management functionality.
  }

  handleSwitchMapType = (): void => {
    if (this.map?.getMapTypeId() === 'roadmap') {
      this.map?.setMapTypeId('terrain');
    } else if (this.map?.getMapTypeId() === 'terrain') {
      this.map?.setMapTypeId('hybrid');
    } else if (this.map?.getMapTypeId() === 'hybrid') {
      this.map?.setMapTypeId('satellite');
    } else {
      this.map?.setMapTypeId('roadmap');
    }
  };

  handleZoomIn = (): void => {
    const zoom = this.map?.getZoom();
    if (zoom) this.map?.setZoom(zoom + 1);
  };

  handleZoomOut = (): void => {
    const zoom = this.map?.getZoom();
    if (zoom) this.map?.setZoom(zoom - 1);
  };

  handleSafeRoutes(): void {
    // Logic to prioritize safe routes in navigation.
    console.log('Prioritizing safe routes...');
    // Implement safety features in route calculation.
  }

  handleWheelchairAccessible(): void {
    // Logic to provide wheelchair-accessible routes.
    console.log('Providing wheelchair-accessible routes...');
    // Filter and provide accessible routes.
  }

  handleEmergencyServices(): void {
    // Logic to locate emergency services on the map.
    console.log('Locating emergency services...');
    // Integrate with emergency services database or API.
  }

  handleFindMyLocation = (): void => {
    const navigator = window.navigator.geolocation;
    navigator.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.map?.setCenter(pos);
      if (this.map) this.createMarker(pos);
    });
  };

  private createMarker = (position: LatLngLiteral, glyph?: Glyph): void => {
    const glyphSvgPinElement = new google.maps.marker.PinElement({
      glyph: glyph ?? '💀',
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.map,
      position: position,
      content: glyphSvgPinElement.element,
      title: 'You are here',
      gmpDraggable: false,
      collisionBehavior: google.maps.CollisionBehavior.REQUIRED,
      zIndex: 1000,
    });
    this.createInfoWindow(marker);
  };

  private createInfoWindow = (marker: AdvancedMarkerElement): void => {
    const infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent('Location found.');
    marker.addEventListener('click', () => {
      infoWindow.open({
        anchor: marker,
        map: this.map,
      });
    });
  };

  handleGetDirections = (): void => {
    this.directionService.calculateDirections(this.markers);
    this.markerService.clearMarkers();
  };

  handleMeasureDistance(): void {
    // Logic to measure distance between two points on the map.
    console.log('Measuring distance...');
    // Implement distance measurement tool.
  }

  handleMeasureArea(): void {
    // Logic to measure the area of a region on the map.
    console.log('Measuring area...');
    // Implement area measurement tool.
  }

  handleSaveMapView(): void {
    // Logic to save the current map view.
    console.log('Saving map view...');
    // Implement functionality to save or bookmark the current map view.
  }

  handleShareMap(): void {
    // Logic to share the current map view.
    console.log('Sharing map...');
    // Provide options to share the map view (e.g., via link, email).
  }

  handlePrintMap(): void {
    // Logic to print the current map view.
    console.log('Printing map...');
    // Implement functionality to print the map.
  }

  handleAnnotateMap(): void {
    // Logic to annotate the map with comments and notes.
    console.log('Annotating map...');
    // Enable annotation tools for adding notes and comments.
  }

  handleShareLiveMap(): void {
    // Logic to share the map in real-time.
    console.log('Sharing live map...');
    // Provide real-time map sharing capabilities.
  }

  handleFitBounds = (): void => {
    if (!this.map) return;
    this.mapService.addMarkersToBounds(this.markers);
    this.mapService.fitMarkersToBounds();
  };
}
