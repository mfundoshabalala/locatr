import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from '../../components';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [CommonModule, GoogleMapsComponent],
  template: ` <app-google-map [mapId]="mapId"></app-google-map> `,
  styleUrl: './routing.component.css',
})
export class RoutingComponent {
  mapId = 'routing';
}
