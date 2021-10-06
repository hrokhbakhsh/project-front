import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SecurityService} from '../../shared/services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanLoad {
  constructor(private _router: Router,
              private _securityService: SecurityService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._securityService.userIsLogin()) {
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this._securityService.userIsLogin()) {
      return true;
    }
    const fullPath = segments.reduce((path, currentSegment) => {
      return `${path}/${currentSegment.path}`;
    }, '');
    this._router.navigate(['/login'], { queryParams: { returnUrl: fullPath } });
    return false;
  }
}
