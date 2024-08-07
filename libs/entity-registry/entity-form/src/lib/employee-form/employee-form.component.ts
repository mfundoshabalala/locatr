import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@profolio/frontend/services';

@Component({
  selector: 'lib-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
  createUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.maxLength(255)]],
      role: ['', [Validators.required, Validators.maxLength(255)]],
      employee: this.fb.group({
        firstName: ['', [Validators.required, Validators.maxLength(255)]],
        lastName: ['', [Validators.required, Validators.maxLength(255)]],
        position: ['', [Validators.required, Validators.maxLength(255)]],
        department: ['', Validators.maxLength(255)],
        createdBy: ['system'],
        updatedBy: ['system'],
      }),
      contact: this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(255)]],
        phone: ['', [Validators.maxLength(255)]],
        email: ['', [Validators.email, Validators.maxLength(255)]],
        createdBy: ['system'],
        updatedBy: ['system'],
      }),
    });
  }

  onSubmit(): void {
    if (this.createUserForm.valid) {
      this.userService.create(this.createUserForm.value).then((user) => {
        console.log('User created', user);
      })
    }
  }
}
