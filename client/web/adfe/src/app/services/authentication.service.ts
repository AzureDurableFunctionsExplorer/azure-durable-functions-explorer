import { Injectable } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { User, Authority } from 'msal';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public get isAuthenticated(): boolean {

      // juggling-check - works both for null and undefined
      return this.msalService.getUser() != null;
  }

  public get user(): User {

    return this.msalService.getUser();
  }

  constructor(private readonly msalService: MsalService) { }

  login() {

      this.msalService.loginRedirect();
  }

  loginToTenant(tenant: string): void {
    this.msalService.acquireTokenRedirect(['https://management.core.windows.net//user_impersonation'], tenant);
  }

  logout() {

      this.msalService.logout();
  }
}
