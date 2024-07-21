import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
