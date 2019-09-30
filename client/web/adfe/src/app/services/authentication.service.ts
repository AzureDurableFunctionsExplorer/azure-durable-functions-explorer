import { Injectable } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public get isAuthenticated(): boolean {

      // juggling-check - works both for null and undefined
      return this.msalService.getUser() != null;
  }

  constructor(private readonly msalService: MsalService) { }

  login() {

      this.msalService.loginRedirect();
  }

  loginToTenant(tenant: string): void {

  }

  logout() {

      this.msalService.logout();
  }
}
