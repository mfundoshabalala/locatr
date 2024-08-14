import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { UserInterface } from '@profolio/interfaces';

import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UserService } from './services/user.service';
import { AbstractDashboardComponent } from '@profolio/core';

@Component({
  selector: 'lib-employee-management',
  standalone: true,
  imports: [CommonModule, EmployeeListComponent],
  template: `
    <lib-employee-list
      (entityUpdated)="onEntityUpdate($event)"
      (entitySelected)="onEntitySelect($event)"
      (entityDeleted)="onEntityDelete($event)">
    </lib-employee-list>
  `,
  styleUrls: ['./employee-management.component.css'],
})
export class EmployeeManagementComponent extends AbstractDashboardComponent<UserInterface> {
  protected readonly service = inject(UserService);
  protected override entityName = 'user';
  protected readonly listComponent = EmployeeListComponent;
  protected readonly formComponent = EmployeeFormComponent;
}
