import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { MapSearchComponent } from "../map-search/map-search.component";
import { MapSidebarComponent } from "../map-sidebar/map-sidebar.component";
import { MapInfoPanelComponent } from "../map-info-panel/map-info-panel.component";
import { MapControllerComponent } from "../map-controller/map-controller.component";
import { DriverSelectorComponent } from "../driver-selector/driver-selector.component";
import { MapButtonPanelComponent } from "../map-button-panel/map-button-panel.component";
import { MapRoutingPanelComponent } from "../map-routing-panel/map-routing-panel.component";
import { DatePickerComponent, FooterComponent, HeaderComponent, LogoComponent, NavbarComponent, UserProfileComponent } from "@profolio/frontend/shared/ui";


@Component({
  selector: 'lib-map-display',
  standalone: true,
  imports: [
    CommonModule,
    DatePickerComponent,
    DriverSelectorComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MapButtonPanelComponent,
    MapControllerComponent,
    MapInfoPanelComponent,
    MapRoutingPanelComponent,
    MapSearchComponent,
    MapSidebarComponent,
    NavbarComponent,
    UserProfileComponent,
  ],
  templateUrl: './map-display.component.html',
  styleUrl: './map-display.component.css',
})
export class MapDisplayComponent {}
