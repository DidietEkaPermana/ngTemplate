import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { JwtService } from '../../core';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private jwtService: JwtService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    if (this.jwtService.getToken()) {
      // logged in so return true
      this.router.navigate(['/home/dashboard']);
      return false;
    }

    // not logged in so redirect to login page with the return url
    return true;

  }
}
