import { Injectable } from '@angular/core';

import { EmployeeInterface } from '@profolio/interfaces';
import { AbstractService } from './abstract.service';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends AbstractService<EmployeeInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'employee';
}
