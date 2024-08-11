import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@profolio/frontend/services';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  brand = 'Locatr';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    const isLoggedIn = this.authService.isAuthenticated()
    if (isLoggedIn) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
