import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  private formComponents: { [key: string]: Type<any> } = {};

  registerFormComponent(entityName: string, component: Type<any>): void {
    this.formComponents[entityName] = component;
  }

  getFormComponent(entityName = ''): Type<any> | null {
    console.log('DynamicFormService getFormComponent', entityName, this.formComponents[entityName]);
    return this.formComponents[entityName] || null;
  }
}
