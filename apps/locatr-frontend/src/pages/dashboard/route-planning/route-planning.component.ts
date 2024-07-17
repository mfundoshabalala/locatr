import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from "../../../components";

@Component({
  selector: 'app-route-planning',
  standalone: true,
  imports: [CommonModule, GoogleMapsComponent],
  template: ` <app-google-map [mapId]="mapId"></app-google-map> `,
  styleUrl: './route-planning.component.css',
})
export class RoutePlanningComponent {
  mapId = 'route_planning';
}
