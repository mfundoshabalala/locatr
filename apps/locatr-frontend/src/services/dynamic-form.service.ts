// dynamic-form.service.ts
import { Injectable, Type } from '@angular/core';
import { ClientFormComponent } from '../components/client-form/client-form.component';
// import { EmployeeFormComponent } from '../components/employee-form/employee-form.component';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  private formComponents: { [key: string]: Type<any> } = {
    client: ClientFormComponent,
    // employee: EmployeeFormComponent,
  };

  getFormComponent(entityName = ''): Type<any> | null {
    return this.formComponents[entityName] || null;
  }
}
