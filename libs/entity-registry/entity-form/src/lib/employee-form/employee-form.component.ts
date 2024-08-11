import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AbstractFormComponent } from '../abstract-form.component';
import { UserInterface } from '@profolio/interfaces';
import { BasicInputComponent, DropDownComponent, FormButtonsComponent } from '@profolio/frontend/shared/ui';

@Component({
  selector: 'lib-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormButtonsComponent, BasicInputComponent, DropDownComponent],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent extends AbstractFormComponent<UserInterface> {
  protected override createForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.maxLength(255)]],
      role: ['', [Validators.required, Validators.maxLength(255)]],
      employee: this.fb.group({
        firstName: ['', [Validators.required, Validators.maxLength(255)]],
        lastName: ['', [Validators.required, Validators.maxLength(255)]],
        position: ['', [Validators.required, Validators.maxLength(255)]],
        department: ['', Validators.maxLength(255)]
      }),
      contact: this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(255)]],
        phone: ['', [Validators.maxLength(255)]],
        email: ['', [Validators.email, Validators.maxLength(255)]]
      }),
    });
  }
}
