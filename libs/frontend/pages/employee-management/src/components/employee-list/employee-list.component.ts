import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeInterface } from '@profolio/interfaces';

@Component({
  selector: 'lib-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  edit = output<EmployeeInterface>({ alias: 'onEdit' });
  delete = output<EmployeeInterface>({ alias: 'onDelete' });
  update = output<EmployeeInterface>({ alias: 'onUpdate' });
  list = input.required<EmployeeInterface[]>({ alias: 'list' });

  onDelete(employee: EmployeeInterface) {
    this.delete.emit(employee);
  }

  onEdit(employee: EmployeeInterface) {
    this.edit.emit(employee);
  }

  onUpdate(employee: EmployeeInterface) {
    this.update.emit(employee);
  }
}
