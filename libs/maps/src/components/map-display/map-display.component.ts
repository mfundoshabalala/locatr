import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSearchComponent } from '../map-search/map-search.component';
import { MapViewComponent } from '../map-viewer/map-viewer.component';
import { MapButtonPanelComponent } from '../map-button-panel/map-button-panel.component';
import { MapInfoPanelComponent } from '../map-info-panel/map-info-panel.component';
import { MapRoutingPanelComponent } from '../map-routing-panel/map-routing-panel.component';
import { MapSidebarComponent } from '../map-sidebar/map-sidebar.component';
import { FooterComponent, HeaderComponent, LogoComponent, NavbarComponent, UserProfileComponent } from '@profolio/shared-ui';

@Component({
  selector: 'lib-map-display',
  standalone: true,
  imports: [
    CommonModule,
    MapButtonPanelComponent,
    MapInfoPanelComponent,
    MapRoutingPanelComponent,
    MapSearchComponent,
    MapViewComponent,
    MapSidebarComponent,
    LogoComponent,
    UserProfileComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './map-display.component.html',
  styleUrl: './map-display.component.css',
})
export class MapDisplayComponent {}
