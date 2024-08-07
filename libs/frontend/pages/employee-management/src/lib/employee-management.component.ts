import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { EmployeeListComponent } from "@entity/list";
import { EmployeeFormComponent } from "@entity/form";
import { UserInterface } from "@profolio/interfaces";
import { UserService } from "@profolio/frontend/services";
import { AbstractDashboardComponent } from "@pages/abstract-dashboard";

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
