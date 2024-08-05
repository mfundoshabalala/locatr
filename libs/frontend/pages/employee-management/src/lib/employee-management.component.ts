import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AbstractDashboardComponent } from "@profolio/frontend/pages/abstract-dashboard";
import { EmployeeInterface } from "@profolio/interfaces";
import { EmployeeFormComponent } from "../components/employee-form/employee-form.component";
import { EmployeeListComponent } from "../components/employee-list/employee-list.component";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: 'lib-employee-management',
  standalone: true,
  imports: [CommonModule, EmployeeListComponent],
  template: `
    <lib-employee-list
      [list]="entityList()"
      (onEdit)="onEdit($event)"
      (onDelete)="onDelete($event)">
    </lib-employee-list>
  `,
  styleUrls: ['./employee-management.component.css'],
})
export class EmployeeManagementComponent extends AbstractDashboardComponent<EmployeeInterface> {
  protected readonly service = inject(EmployeeService);
  protected readonly listComponent = EmployeeListComponent;
  protected readonly formComponent = EmployeeFormComponent;
}
