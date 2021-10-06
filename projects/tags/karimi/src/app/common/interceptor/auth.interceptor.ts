import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { SESSION_STORAGE, LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    SERVER_API_URL = environment.apiUrl;

    constructor(@Inject(SESSION_STORAGE) private sessionStorage: StorageService,
                @Inject(LOCAL_STORAGE) private localStorage: StorageService
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request || !request.url ||
            (request.url.startsWith("http") && !(this.SERVER_API_URL && request.url.startsWith(this.SERVER_API_URL)))) {
            return next.handle(request);
        }

        const token = this.localStorage.get("authenticationToken") || this.sessionStorage.get("authenticationToken");
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token,
                },
            });
        }
        return next.handle(request);
    }
}
