import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {BehaviorSubject, throwError} from 'rxjs';
import parseJwt from "../utils/jwt-parser";
import {UserInterface} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  public isLoginSubject = new BehaviorSubject(false);
  private _tokensKey = 'Tokens';
  private _userToken = null;
  private _userAccount: UserInterface | undefined;
  constructor(private _httpClient: HttpClient) { }

  addTokensToBrowserStorage(tokens: string) {
    localStorage.setItem(this._tokensKey, JSON.stringify(tokens));
  }

  getTokensFromBrowserStorage() {
    return JSON.parse(<string>localStorage.getItem(this._tokensKey));
  }

  removeTokensFromBrowserStorage() {
    localStorage.removeItem(this._tokensKey);
    window.location.reload();
  }


  refreshToken(refreshToken: string) {
    return this._httpClient.post<any>(`uaa/oauth/token?refresh_token=${refreshToken}&grant_type=refresh_token`, {}).pipe(
      catchError(this.handleError)
    );
  }

  userIsLogin() {
    return !!(this.getTokensFromBrowserStorage());
  }

  getUserRole() {
    this._userToken = this.getTokensFromBrowserStorage();
    if(this._userToken) {
      // @ts-ignore
      this._userAccount = parseJwt(this._userToken.access_token);
      // @ts-ignore
      return this._userAccount.authorities[0];
    } else {
      return null;
    }

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A +client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  };
}
