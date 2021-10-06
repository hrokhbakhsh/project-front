import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {environment} from "../../../environments/environment";
import {Login} from "../model/login.model";
import {LOCAL_STORAGE, SESSION_STORAGE, StorageService} from "ngx-webstorage-service";
import {JwtToken} from "../model/account.model";


@Injectable({providedIn: "root"})
export class AuthServerProvider {
    SERVER_API_URL = environment.apiUrl;

    constructor(
        private http: HttpClient,
        @Inject(SESSION_STORAGE) private sessionStorage: StorageService,
        @Inject(LOCAL_STORAGE) private localStorage: StorageService
    ) {
    }

    getToken(): string {
        return this.localStorage.get("authenticationToken") || this.sessionStorage.get("authenticationToken") || "";
    }

    login(credentials: Login): Observable<JwtToken> {
        return this.http
            .post<JwtToken>(this.SERVER_API_URL + "api/authenticate/signin", credentials)
            .pipe(map(response => this.authenticateSuccess(response, credentials.rememberMe)));
    }

    logout(): Observable<void> {
        return new Observable(observer => {
            this.localStorage.remove("authenticationToken");
            this.sessionStorage.remove("authenticationToken");
            observer.complete();
        });
    }

    private authenticateSuccess(response: JwtToken, rememberMe: boolean): JwtToken {
        const jwt = response.token;
        if (rememberMe) {
            this.localStorage.set("authenticationToken", jwt);
        } else {
            this.sessionStorage.set("authenticationToken", jwt);
        }
        return response;
    }
}
