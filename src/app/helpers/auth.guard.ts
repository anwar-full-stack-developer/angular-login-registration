import { inject } from '@angular/core';
import {
  Router,
  NavigationExtras,
} from '@angular/router';
import { AccountService } from './../services/account.service';

export const authGuard = () => {
  const router = inject(Router);
  const accountService = inject(AccountService);

  if (accountService.userIsLoggedin) {
    return true;
  }

  // Create a dummy session id
  const sessionId = 123456789;

  // Set our navigation extras object
  // that contains our global query params and fragment
  const navigationExtras: NavigationExtras = {
    queryParams: { session_id: sessionId },
    fragment: 'anchor'
  };

  // Navigate to the login page with extras
  return router.createUrlTree(['/account/login'], navigationExtras);
};
