import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';

import { DepotInterface } from '@profolio/interfaces';
import { GoogleMapComponent, MarkerInterface } from '@profolio/route-map';
import { AbstractDashboardComponent } from '@profolio/core';

import { DepotService } from './services/depot.service';
import { DepotListComponent } from './components/depot-list/depot-list.component';
import { DepotFormComponent } from './components/depot-form/depot-form.component';

@Component({
  selector: 'lib-depot-management',
  standalone: true,
  imports: [CommonModule, DepotListComponent, GoogleMapComponent],
  template: `
  <section class="flex flex-nowrap h-full w-full gap-x-6">
    <lib-depot-list
      [entities]="entityList()"
      (entityUpdated)="onEntityUpdate($event)"
      (entitySelected)="onEntityRead($event)"
      (entityDeleted)="onEntityDelete($event)">
    </lib-depot-list>
    <lib-google-map class="w-full" [id]="mapId" [routeData]="markers"></lib-google-map>
  </section>
  `,
})
export class DepotManagementComponent extends AbstractDashboardComponent<DepotInterface> {
  protected readonly service = inject(DepotService);
  protected override entityName = 'depot';
  protected readonly listComponent = DepotListComponent;
  protected readonly formComponent = DepotFormComponent;

  mapId = 'depot_map';
  markers: MarkerInterface[] = [];

  constructor() {
    super();
    effect(() => {
      const markers: MarkerInterface[] = this.entityList().map((depot: DepotInterface) => ({
        name: depot.name,
        address: depot.address,
        position: { lat: Number(depot.latitude), lng: Number(depot.longitude) },
      }));
      this.markers = [...markers];
    });
  }
}
