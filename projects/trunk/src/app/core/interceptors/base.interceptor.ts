import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {TranslateService} from "@ngx-translate/core";
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';


@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  private _url: any | undefined;
  private _serverUrl: any | undefined;
  private _copyReq: any | undefined;
  private _prefixReq: any | undefined;
  private _currentLang: any | undefined;
  private _timezoneOffset = new Date().getTimezoneOffset().toString();

  constructor(private _router: Router,
              private _translateService: TranslateService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    this._copyReq = request.clone();
    this._url = request.url;
    if (!this._url.startsWith('/') && !this._url.startsWith('.') && !this._url.startsWith('custom')) {
      this._prefixReq = this._url.split('/')[0];
      // @ts-ignore
      this._serverUrl = environment.baseUrl[this._prefixReq];
      // this.spinner.show();
      this._currentLang = this._translateService.currentLang.toUpperCase();

      this._copyReq = request.clone({
        url: `${this._serverUrl}${this._url.replace(this._prefixReq, '')}`,
        setHeaders: {
          lang: this._currentLang,
          offset: this._timezoneOffset
        }
      });

    } else {
      this._url = this._url.replace('custom/', '');
      this._copyReq = request.clone({
        url: `${this._url}`
      });
    }

    return next.handle(this._copyReq).pipe(
      tap(evt => {
      }),
      catchError((err: any) => {
        // this.spinner.hide();

        return throwError(err);
      }));
  }
}
