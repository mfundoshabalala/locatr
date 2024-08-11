import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthenticationService } from '@profolio/frontend/services';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // Allow access
  } else {
    // Store the attempted URL
    const attemptedUrl = state.url;
    router.navigate(['/auth/login'], { queryParams: { returnUrl: attemptedUrl } });
    return false; // Prevent access
  }
};
