import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationService } from '../../../services';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    roleId: null,
    department: 'Sales',
    employee: {
      firstName: '',
      lastName: '',
      email: '',
      position: '',
    },
  };

  constructor(private authService: AuthenticationService) {}

  async onSubmit() {
    const _user = this.authService.register(this.user);
  }
}
