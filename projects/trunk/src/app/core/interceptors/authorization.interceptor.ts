import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {SecurityService} from "../../shared/services/security.service";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  private _copyReq: any | undefined;
  private _userToken: any;

  constructor(private _router: Router,
              private _securityService: SecurityService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    this._copyReq = request.clone();

    if (!this._copyReq.url.startsWith('/') && !this._copyReq.url.startsWith('.') && !this._copyReq.url.startsWith('custom')) {
      if (!this._userToken) {
        this._userToken = this._securityService.getTokensFromBrowserStorage();
      }

      if (this._userToken && this._userToken.access_token) {
        this._copyReq = request.clone({
          url: `${this._copyReq.url}`,
          setHeaders: {
            Authorization: `Bearer ${this._userToken.access_token}`
          }
        });
      }
    }
    return next.handle(this._copyReq).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          // this.spinner.hide();
          /*if (evt && evt.body && evt.body.responseStatus && evt.body.responseStatus.value === 1005) {
            this.userStoreService.removeUserAccount();
            this.router.navigate(['/login']);
          }*/
        }
      }),
      catchError((err: any) => {
        // this.spinner.hide();
        if (err instanceof HttpErrorResponse) {
          try {
            /*check access_token, if invalid_tokens call refresh token and set new token else if
                token is expired remove user session and redirect to login page*/
            if (err.status === 401) {
              // @ts-ignore
              if (err.url.includes('refresh_token')) {
                this._securityService.removeTokensFromBrowserStorage();
                this._router.navigate(['/auth/login']);
              } else {
                this._securityService.refreshToken(this._userToken.refresh_token).subscribe(res => {
                  if (res.access_token) {
                    this._securityService.addTokensToBrowserStorage(res);
                    window.location.reload();
                  } else {
                    this._securityService.removeTokensFromBrowserStorage();
                    this._router.navigate(['/login']);
                  }
                });
              }
            }
          } catch (e) {
            return of(err);
          }
        }
        return throwError(err);
      }));
  }
}
