import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteInterface } from '@profolio/interfaces';
import { AbstractListComponent } from '@profolio/core';
import { RouteService } from '@profolio/frontend/services';

@Component({
  selector: 'lib-route-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-list.component.html',
  styleUrl: './route-list.component.css',
})
export class RouteListComponent extends AbstractListComponent<RouteInterface> {
  protected service = inject(RouteService);
}
