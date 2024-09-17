import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';

import { AuthenticationService } from '@profolio/frontend/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verify-user',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class VerifyUserComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthenticationService);

  async ngOnInit(): Promise<void> {
    const token = this.route.snapshot.queryParams['token'];
    const username = this.route.snapshot.queryParams['username'];

    if (token && username) {
      try {
        await this.authService.verifyUser({ token, username });
        this.router.navigate(['/dashboard']); // Navigate on success
      } catch (error) {
        console.error('Verification failed:', error);
        this.router.navigate(['/auth/verification-failed']);
      }
    }
  }
}
