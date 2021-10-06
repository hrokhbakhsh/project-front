import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {JwtToken} from "../model/account.model";
import {Login} from "../model/login.model";
import {AccountService} from "./account.service";
import {AuthServerProvider} from "./auth-jwt.service";
import {map} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class LoginService {
    constructor(private accountService: AccountService,
                private authServerProvider: AuthServerProvider) {
    }

    login(credentials: Login): Observable<JwtToken | null> {
        return this.authServerProvider.login(credentials)
            .pipe(map(jwtToken => this.accountService.identity(true, jwtToken)));
    }

    logout(): void {
        this.authServerProvider.logout()
            .subscribe({
                complete: () => this.accountService.authenticate(null)
            });
    }
}
