import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientEntity } from '@profolio/interfaces';
import { GoogleMapsComponent } from "../../../components";
import { ClientService } from '../../../services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-planning',
  standalone: true,
  imports: [CommonModule, GoogleMapsComponent],
  template: ` <app-google-map [id]="mapId" [data]="data()"></app-google-map> `,
  styleUrl: './route-planning.component.css',
})
export class RoutePlanningComponent implements OnInit {
  mapId = 'route_planning';
  data = signal<any[]>([]);

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => this.loadData(data['clients']));
  }

  loadData(list: any[]): void {
    const data = list
      .filter(client => client.isActive && client.site?.latitude && client.site?.longitude)
      .map(client => ({
        lat: parseFloat(client.site.latitude),
        lng: parseFloat(client.site.longitude),
        label: client.name,
      }));
    this.data.set(data);
  }
}
