import { Injectable } from '@angular/core';

import { AbstractService } from '@profolio/core';
import { EmployeeInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends AbstractService<EmployeeInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'employee';
}
