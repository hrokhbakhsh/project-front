import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {AppConfigService} from "./common/service/appconfigservice";
import {AppConfig} from "./common/model/appconfig";
import {Subscription} from "rxjs";
import {PrimeNGConfig} from "primeng/api";
import {LanguageService} from "./common/language/language.service";
import {AccountService} from "./common/auth/account.service";


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {

    menuActive: boolean;
    config: AppConfig;

    public subscription: Subscription;

    constructor(
        private router: Router,
        private configService: AppConfigService,
        private languageService: LanguageService,
        private accountService: AccountService,
        private primengConfig: PrimeNGConfig
    ) {
    }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
        this.config = this.configService.getConfig();
        this.subscription = this.configService.configUpdate$.subscribe(config => this.config = config);
        this.languageService.changeLanguage("fa");
    }

    onMenuButtonClick(): void {
        this.menuActive = true;
        this.addClass(document.body, "blocked-scroll");
    }

    onMaskClick(): void {
        this.hideMenu();
    }

    hideMenu(): void {
        this.menuActive = false;
        this.removeClass(document.body, "blocked-scroll");
    }

    addClass(element: any, className: string): void {
        if (element.classList) {
            element.classList.add(className);
        } else {
            element.className += " " + className;
        }
    }

    removeClass(element: any, className: string): void {
        if (element.classList) {
            element.classList.remove(className);
        } else {
            element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    get addRtlClass(): string {
        return this.languageService.isCurrentLanguageRtl() ? "ui-rtl" : "";
    }

    get isUserAuthenticated(): boolean {
        return this.accountService.isAuthenticated();
    }
}
