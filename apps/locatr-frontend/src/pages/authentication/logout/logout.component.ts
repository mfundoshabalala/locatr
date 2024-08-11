import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@profolio/frontend/services';

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
