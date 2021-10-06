import {LOCALE_ID, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LocationStrategy, HashLocationStrategy, registerLocaleData} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";

import {CountryService} from "./common/service/countryservice";

import {IconService} from "./common/service/iconservice";
import {AppConfigService} from "./common/service/appconfigservice";
import {ProductService} from "./common/service/productservice";

import {AppTopBarComponent} from "./app.topbar.component";
import {AppMenuComponent} from "./app.menu.component";
import {AppFooterComponent} from "./app.footer.component";
import {DialogService} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {DynamicComponentService} from "./common/service/dynameicComponentService";
import {ProductGroupService} from "./components/examples/product-group-component/ProductGroupService";
import {AuthInterceptor} from "./common/interceptor/auth.interceptor";
import {AuthExpiredInterceptor} from "./common/interceptor/auth-expired.interceptor";
import {PmtConfigService} from "./common/service/config.service";
import {LoginService} from "./common/auth/login.service";
import {AccountService} from "./common/auth/account.service";
import {AuthServerProvider} from "./common/auth/auth-jwt.service";
import {CSRFService} from "./common/auth/csrf.service";
import {StateStorageService} from "./common/auth/state-storage.service";
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {PmtMissingTranslationHandler} from "./common/language/miss-translate-handler";
import localeFr from "@angular/common/locales/fa";
import {SharedModule} from "./shared/shared.module";
registerLocaleData(localeFr);

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AppTopBarComponent,
        AppMenuComponent,
        AppFooterComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translatePartialLoader,
                deps: [HttpClient],
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useFactory: missingTranslationHandler,
                deps: [PmtConfigService],
            }
        }),
        SharedModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: LOCALE_ID, useValue: "fa-IR"},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: AuthExpiredInterceptor, multi: true},
        CountryService, IconService, AppConfigService, ProductService,
        DialogService, MessageService, DynamicComponentService, ProductGroupService,
        StateStorageService, PmtConfigService, LoginService, AccountService,
        AuthServerProvider, CSRFService,
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function translatePartialLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, "/assets/i18n/", `.json`);
}

export function missingTranslationHandler(configService: PmtConfigService): PmtMissingTranslationHandler {
    return new PmtMissingTranslationHandler(configService);
}
