import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteFormComponent } from '@entity/form';
import { RouteListComponent } from '@entity/list';
import { RouteInterface } from '@profolio/interfaces';
import { RouteService } from '@profolio/frontend/services';
import { AbstractDashboardComponent } from '@pages/abstract-dashboard';

@Component({
  selector: 'lib-route-management',
  standalone: true,
  imports: [CommonModule, RouteListComponent],
  template: `
    <lib-route-list></lib-route-list>
  `,
  styleUrl: './route-management.component.css',
})
export class RouteManagementComponent extends AbstractDashboardComponent<RouteInterface> {
  protected override service = inject(RouteService);
  protected override entityName = 'route';
  protected override listComponent = RouteListComponent;
  protected override formComponent = RouteFormComponent;
}
