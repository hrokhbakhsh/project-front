import {Inject, Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable, ReplaySubject, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {StateStorageService} from "./state-storage.service";
import {JwtToken} from "../model/account.model";
import {LanguageService} from "../language/language.service";
import {SESSION_STORAGE, StorageService} from "ngx-webstorage-service";


@Injectable({providedIn: "root"})
export class AccountService {
    SERVER_API_URL = environment.apiUrl;
    private userIdentity: JwtToken | null = null;
    private authenticationState = new ReplaySubject<JwtToken | null>(1);

    constructor(
        private languageService: LanguageService,
        @Inject(SESSION_STORAGE) private sessionStorage: StorageService,
        private http: HttpClient,
        private stateStorageService: StateStorageService,
        private router: Router
    ) {
    }

    save(account: JwtToken): Observable<{}> {
        return this.http.post(this.SERVER_API_URL + "api/account", account);
    }

    authenticate(identity: JwtToken | null): void {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
    }

    hasAnyAuthority(authorities: string[] | string): boolean {
        if (!this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        return this.userIdentity.authorities.some((authority: string) => authorities.includes(authority));
    }

    identity(force: boolean, jwtToken: JwtToken): JwtToken {
        if (force || !this.isAuthenticated()) {
            this.authenticate(jwtToken);

            // After retrieve the account info, the language will be changed to
            // the user's preferred language configured in the account setting
            if (jwtToken && jwtToken.langKey) {
                const langKey = this.sessionStorage.get("locale") || jwtToken.langKey;
                this.languageService.changeLanguage(langKey);
            }

            if (jwtToken) {
                this.navigateToStoredUrl();
            }
        }
        return jwtToken;
    }

    isAuthenticated(): boolean {
        return this.userIdentity !== null;
    }

    getAuthenticationState(): Observable<JwtToken | null> {
        return this.authenticationState.asObservable();
    }


    private navigateToStoredUrl(): void {
        // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
        // if login is successful, go to stored previousState and clear previousState
        const previousUrl = this.stateStorageService.getUrl();
        if (previousUrl) {
            this.stateStorageService.clearUrl();
            this.router.navigateByUrl(previousUrl);
        }
    }
}
