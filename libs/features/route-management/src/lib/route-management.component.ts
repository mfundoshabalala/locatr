import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouteInterface } from '@profolio/interfaces';
import { RouteFormComponent } from './components/route-form/route-form.component';
import { RouteListComponent } from './components/route-list/route-list.component';
import { RouteService } from './services/route.service';
import { AbstractDashboardComponent } from '@profolio/core';

@Component({
  selector: 'lib-route-management',
  standalone: true,
  imports: [CommonModule, RouteListComponent],
  template: `
    <lib-route-list
      [entities]="entityList()"
      (entityUpdated)="onEntityUpdate($event)"
      (entitySelected)="onEntityRead($event)"
      (entityDeleted)="onEntityDelete($event)">
    </lib-route-list>
  `,
  styleUrl: './route-management.component.css',
})
export class RouteManagementComponent extends AbstractDashboardComponent<RouteInterface> {
  protected override service = inject(RouteService);
  protected override entityName = 'route';
  protected override listComponent = RouteListComponent;
  protected override formComponent = RouteFormComponent;
}
