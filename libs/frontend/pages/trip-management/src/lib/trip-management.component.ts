import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractDashboardComponent } from '@pages/abstract-dashboard';
import { TripInterface } from '@profolio/interfaces';
import { TripService } from '@profolio/frontend/services';
import { TripFormComponent } from '../components/trip-form/trip-form.component';
import { TripListComponent } from '../components/trip-list/trip-list.component';

@Component({
  selector: 'lib-trip-management',
  standalone: true,
  imports: [CommonModule, TripListComponent],
  template: `
    <lib-trip-list 
      [list]="entityList()"
      (onEdit)="onEdit($event)"
      (onDelete)="onDelete($event)">
    </lib-trip-list>
  `,
  styleUrl: './trip-management.component.css',
})
export class TripManagementComponent extends AbstractDashboardComponent<TripInterface> {
  protected readonly service = inject(TripService);
  protected readonly listComponent = TripListComponent;
  protected readonly formComponent = TripFormComponent;
}