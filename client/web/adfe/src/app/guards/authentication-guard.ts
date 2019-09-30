import { Injectable } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from "@angular/router";
import { Store } from "@ngxs/store";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private readonly authenticationService: AuthenticationService, private readonly router: Router) {

    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (this.authenticationService.isAuthenticated) {
            return Promise.resolve(true);
        }

        // this.store.dispatch(new SavePostAuthenticationUri(state.url));

        return this.router.navigateByUrl('/login');
    }
}
