import { Injectable } from '@angular/core';

import { EmployeeInterface } from '@profolio/interfaces';
import { AbstractService } from './abstract.service';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends AbstractService<EmployeeInterface> {
  protected baseUrl = 'http://localhost:3000/api/employee';
}
