import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from '../../services';
import { Router } from '@angular/router';

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
