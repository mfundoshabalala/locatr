import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSearchInputComponent } from '../map-search-input/map-search-input.component';
import { MapViewComponent } from '../map-viewer/map-viewer.component';
import { MapButtonPanelComponent } from '../map-button-panel/map-button-panel.component';
import { MapInfoPanelComponent } from '../map-info-panel/map-info-panel.component';
import { MapRoutingPanelComponent } from '../map-routing-panel/map-routing-panel.component';
import { MapSidebarComponent } from '../map-sidebar/map-sidebar.component';
import { LogoComponent } from '@profolio/shared-ui';

@Component({
  selector: 'lib-map-display',
  standalone: true,
  imports: [
    CommonModule,
    MapButtonPanelComponent,
    MapInfoPanelComponent,
    MapRoutingPanelComponent,
    MapSearchInputComponent,
    MapViewComponent,
    MapSidebarComponent,
    LogoComponent
  ],
  templateUrl: './map-display.component.html',
  styleUrl: './map-display.component.css',
})
export class MapDisplayComponent {}
