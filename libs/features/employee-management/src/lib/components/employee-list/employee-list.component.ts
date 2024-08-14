import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterface } from '@profolio/interfaces';
import { AbstractListComponent } from '@profolio/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'lib-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent extends AbstractListComponent<UserInterface> {
  protected service = inject(UserService);
}
