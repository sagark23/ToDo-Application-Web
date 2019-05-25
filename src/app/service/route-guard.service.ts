import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authenticationService.isUserLoggedIn()){
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }

  constructor(private authenticationService: HardcodedAuthenticationService,
    private router: Router) { }
}
