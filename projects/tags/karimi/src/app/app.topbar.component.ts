import { Component, EventEmitter, Output, ViewChild, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { trigger, style, transition, animate, AnimationEvent } from "@angular/animations";
import { Router, NavigationEnd } from "@angular/router";
import { AppConfigService } from "./common/service/appconfigservice";
import { AppConfig } from "./common/model/appconfig";
import { Subscription } from "rxjs";
import {LanguageService} from "./common/language/language.service";
import {AccountService} from "./common/auth/account.service";
import {LoginService} from "./common/auth/login.service";

@Component({
    selector: "app-topbar",
    template: `
        <div class="layout-topbar">
            <a class="menu-button" (click)="onMenuButtonClick($event)">
                <i class="pi pi-bars"></i>
            </a>
            <a [routerLink]="['/']" class="logo">
                <img alt="logo" src="data:image/png;base64,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" />
            </a>
            <div class="app-theme" [pTooltip]="config.theme" tooltipPosition="bottom">
                <img [src]="'assets/showcase/images/themes/' + logoMap[config.theme]" />
            </div>
            <ul #topbarMenu class="topbar-menu">
                <li class="topbar-submenu">
                    <a tabindex="0" (click)="toggleMenu($event, 0)"><i class="pi pi-fw pi-palette"></i> Themes</a>
                    <ul [@overlayMenuAnimation]="'visible'" *ngIf="activeMenuIndex === 0" (@overlayMenuAnimation.start)="onOverlayMenuEnter($event)">
                        <li class="topbar-submenu-header">THEMING</li>
                        <li><a [routerLink]="['/example/icons']"><i class="pi pi-fw pi-info-circle"></i><span>Icons</span></a></li>

                        <li class="topbar-submenu-header">BOOTSTRAP</li>
                        <li><a (click)="changeTheme($event, 'bootstrap4-light-blue', false)"><img src="assets/showcase/images/themes/bootstrap4-light-blue.svg" alt="Blue Light" /><span>Blue Light</span></a></li>
                        <li><a (click)="changeTheme($event, 'bootstrap4-light-purple', false)"><img src="assets/showcase/images/themes/bootstrap4-light-purple.svg" alt="Purple Light" /><span>Purple Light</span></a></li>
                        <li><a (click)="changeTheme($event, 'bootstrap4-dark-blue', true)"><img src="assets/showcase/images/themes/bootstrap4-dark-blue.svg" alt="Blue Dark" /><span>Blue Dark</span></a></li>
                        <li><a (click)="changeTheme($event, 'bootstrap4-dark-purple', true)"><img src="assets/showcase/images/themes/bootstrap4-dark-purple.svg" alt="Purple Dark" /><span>Purple Dark</span></a></li>

                        <li class="topbar-submenu-header">MATERIAL DESIGN</li>
                        <li><a (click)="changeTheme($event, 'md-light-indigo', false)"><img src="assets/showcase/images/themes/md-light-indigo.svg" alt="Indigo Light" /><span>Indigo Light</span></a></li>
                        <li><a (click)="changeTheme($event, 'md-light-deeppurple', false)"><img src="assets/showcase/images/themes/md-light-deeppurple.svg" alt="Deep Purple Light" /><span>Deep Purple Light</span></a></li>
                        <li><a (click)="changeTheme($event, 'md-dark-indigo', true)"><img src="assets/showcase/images/themes/md-dark-indigo.svg" alt="Indigo Dark" /><span>Indigo Dark</span></a></li>
                        <li><a (click)="changeTheme($event, 'md-dark-deeppurple', true)"><img src="assets/showcase/images/themes/md-dark-deeppurple.svg" alt="Deep Purple Dark" /><span>Deep Purple Dark</span></a></li>

                        <li class="topbar-submenu-header">MATERIAL DESIGN COMPACT</li>
                        <li><a (click)="changeTheme($event, 'mdc-light-indigo', false)"><img src="assets/showcase/images/themes/md-light-indigo.svg" alt="Indigo Light" /><span>Indigo Light</span></a></li>
                        <li><a (click)="changeTheme($event, 'mdc-light-deeppurple', false)"><img src="assets/showcase/images/themes/md-light-deeppurple.svg" alt="Deep Purple Light" /><span>Deep Purple Light</span></a></li>
                        <li><a (click)="changeTheme($event, 'mdc-dark-indigo', true)"><img src="assets/showcase/images/themes/md-dark-indigo.svg" alt="Indigo Dark" /><span>Indigo Dark</span></a></li>
                        <li><a (click)="changeTheme($event, 'mdc-dark-deeppurple', true)"><img src="assets/showcase/images/themes/md-dark-deeppurple.svg" alt="Deep Purple Dark" /><span>Deep Purple Dark</span></a></li>

                        <li class="topbar-submenu-header">FLUENT UI</li>
                        <li><a (click)="changeTheme($event, 'fluent-light', false)"><img src="assets/showcase/images/themes/fluent-light.png" alt="Fluent Light" /><span>Fluent Light</span></a></li>

                        <li class="topbar-submenu-header">PRIMEONE</li>
                        <li><a (click)="changeTheme($event, 'saga-blue', false)"><img src="assets/showcase/images/themes/saga-blue.png" alt="Saga Blue" /><span>Saga Blue</span></a></li>
                        <li><a (click)="changeTheme($event, 'saga-green', false)"><img src="assets/showcase/images/themes/saga-green.png" alt="Saga Green" /><span>Saga Green</span></a></li>
                        <li><a (click)="changeTheme($event, 'saga-orange', false)"><img src="assets/showcase/images/themes/saga-orange.png" alt="Saga Orange" /><span>Saga Orange</span></a></li>
                        <li><a (click)="changeTheme($event, 'saga-purple', false)"><img src="assets/showcase/images/themes/saga-purple.png" alt="Saga Purple" /><span>Saga Purple</span></a></li>
                        <li><a (click)="changeTheme($event, 'vela-blue', true)"><img src="assets/showcase/images/themes/vela-blue.png" alt="Vela Blue" /><span>Vela Blue</span></a></li>
                        <li><a (click)="changeTheme($event, 'vela-green', true)"><img src="assets/showcase/images/themes/vela-green.png" alt="Vela Green" /><span>Vela Green</span></a></li>
                        <li><a (click)="changeTheme($event, 'vela-orange', true)"><img src="assets/showcase/images/themes/vela-orange.png" alt="Vela Orange" /><span>Vela Orange</span></a></li>
                        <li><a (click)="changeTheme($event, 'vela-purple', true)"><img src="assets/showcase/images/themes/vela-purple.png" alt="Vela Purple" /><span>Vela Purple</span></a></li>
                        <li><a (click)="changeTheme($event, 'arya-blue', true)"><img src="assets/showcase/images/themes/arya-blue.png" alt="Arya Blue" /><span>Arya Blue</span></a></li>
                        <li><a (click)="changeTheme($event, 'arya-green', true)"><img src="assets/showcase/images/themes/arya-green.png" alt="Arya Green" /><span>Arya Green</span></a></li>
                        <li><a (click)="changeTheme($event, 'arya-orange', true)"><img src="assets/showcase/images/themes/arya-orange.png" alt="Arya Orange" /><span>Arya Orange</span></a></li>
                        <li><a (click)="changeTheme($event, 'arya-purple', true)"><img src="assets/showcase/images/themes/arya-purple.png" alt="Arya Purple" /><span>Arya Purple</span></a></li>

                        <li class="topbar-submenu-header">PREMIUM</li>
                        <li><a (click)="changeTheme($event, 'soho-light', false)"><img src="assets/showcase/images/themes/soho-light.png" alt="Soho Light" /><span>Soho Light</span></a></li>
                        <li><a (click)="changeTheme($event, 'soho-dark', true)"><img src="assets/showcase/images/themes/soho-dark.png" alt="Soho Dark" /><span>Soho Dark</span></a></li>
                        <li><a (click)="changeTheme($event, 'viva-light', false)"><img src="assets/showcase/images/themes/viva-light.svg" alt="Viva Light" /><span>Viva Light</span></a></li>
                        <li><a (click)="changeTheme($event, 'viva-dark', true)"><img src="assets/showcase/images/themes/viva-dark.svg" alt="Viva Dark" /><span>Viva Dark</span></a></li>
                        <li><a (click)="changeTheme($event, 'mira', false)"><img src="assets/showcase/images/themes/mira.jpg" alt="Mira" /><span>Mira</span></a></li>
                        <li><a (click)="changeTheme($event, 'nano', false)"><img src="assets/showcase/images/themes/nano.jpg" alt="Nano" /><span>Nano</span></a></li>

                        <li class="topbar-submenu-header">LEGACY</li>
                        <li><a (click)="changeTheme($event, 'nova', false)"><img src="assets/showcase/images/themes/nova.png" alt="Nova" /><span>Nova</span></a></li>
                        <li><a (click)="changeTheme($event, 'nova-alt', false)"><img src="assets/showcase/images/themes/nova-alt.png" alt="Nova Alt" /><span>Nova Alt</span></a></li>
                        <li><a (click)="changeTheme($event, 'nova-accent', false)"><img src="assets/showcase/images/themes/nova-accent.png" alt="Nova Accent" /><span>Nova Accent</span></a></li>
                        <li><a (click)="changeTheme($event, 'luna-amber', true)"><img src="assets/showcase/images/themes/luna-amber.png" alt="Luna Amber" /><span>Luna Amber</span></a></li>
                        <li><a (click)="changeTheme($event, 'luna-blue', true)"><img src="assets/showcase/images/themes/luna-blue.png" alt="Luna Blue" /><span>Luna Blue</span></a></li>
                        <li><a (click)="changeTheme($event, 'luna-green', true)"><img src="assets/showcase/images/themes/luna-green.png" alt="Luna Green" /><span>Luna Green</span></a></li>
                        <li><a (click)="changeTheme($event, 'luna-pink', true)"><img src="assets/showcase/images/themes/luna-pink.png" alt="Luna Pink" /><span>Luna Pink</span></a></li>
                        <li><a (click)="changeTheme($event, 'rhea', false)"><img src="assets/showcase/images/themes/rhea.png" alt="Rhea" /><span>Rhea</span></a></li>
                    </ul>
                </li>
                <li class="topbar-submenu">
                    <a tabindex="1" (click)="toggleMenu($event, 1)">
                        <img src="assets/showcase/images/demo/flag/flag_placeholder.png"
                             alt="Farsi" style="width: 20px"
                             [class]="'flag flag-' + currentCountry"/>
                        <span style="margin: 0 7px;">{{currentLanguageTitle}}</span>
                    </a>
                    <ul [@overlayMenuAnimation]="'visible'" *ngIf="activeMenuIndex === 1" (@overlayMenuAnimation.start)="onOverlayMenuEnter($event)">
                        <li>
                            <a (click)="changeLanguage('fa')">
                                <img src="assets/showcase/images/demo/flag/flag_placeholder.png" alt="Farsi"  class="flag flag-ir"/>
                                <span style="margin: 0 7px;">فارسی</span>
                            </a>
                        </li>
                        <li>
                            <a (click)="changeLanguage('en')">
                                <img src="assets/showcase/images/demo/flag/flag_placeholder.png" alt="English" class="flag flag-us"/>
                                <span style="margin: 0 7px;">English</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="topbar-submenu">
                    <a *ngIf="isUserAuthenticated" tabindex="2" (click)="logoutAndNavigateToLogin()">
                        <i class="pi pi-fw pi-sign-out"></i> {{loginLogoutTitle}}
                    </a>
                    <a *ngIf="!isUserAuthenticated" tabindex="2" (click)="navigateToLogin()">
                        <i class="pi pi-fw  pi-sign-in"></i> {{loginLogoutTitle}}
                    </a>
                </li>
            </ul>
        </div>
    `,
    animations: [
        trigger("overlayMenuAnimation", [
            transition(":enter", [
                style({opacity: 0, transform: "scaleY(0.8)"}),
                animate(".12s cubic-bezier(0, 0, 0.2, 1)", style({ opacity: 1, transform: "*" })),
              ]),
              transition(":leave", [
                animate(".1s linear", style({ opacity: 0 }))
              ])
        ])
    ]
})
export class AppTopBarComponent implements OnInit, OnDestroy {

    @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

    @ViewChild("topbarMenu") topbarMenu: ElementRef;

    activeMenuIndex: number;

    outsideClickListener: any;

    config: AppConfig;

    subscription: Subscription;

    logoMap = {
        "bootstrap4-light-blue": "bootstrap4-light-blue.svg",
        "bootstrap4-light-purple": "bootstrap4-light-purple.svg",
        "bootstrap4-dark-blue": "bootstrap4-dark-blue.svg",
        "bootstrap4-dark-purple": "bootstrap4-dark-purple.svg",
        "md-light-indigo": "md-light-indigo.svg",
        "md-light-deeppurple": "md-light-deeppurple.svg",
        "md-dark-indigo": "md-dark-indigo.svg",
        "md-dark-deeppurple": "md-dark-deeppurple.svg",
        "mdc-light-indigo": "md-light-indigo.svg",
        "mdc-light-deeppurple": "md-light-deeppurple.svg",
        "mdc-dark-indigo": "md-dark-indigo.svg",
        "mdc-dark-deeppurple": "md-dark-deeppurple.svg",
        "saga-blue": "saga-blue.png",
        "saga-green": "saga-green.png",
        "saga-orange": "saga-orange.png",
        "saga-purple": "saga-purple.png",
        "vela-blue": "vela-blue.png",
        "vela-green": "vela-green.png",
        "vela-orange": "vela-orange.png",
        "vela-purple": "vela-purple.png",
        "arya-blue": "arya-blue.png",
        "arya-green": "arya-green.png",
        "arya-orange": "arya-orange.png",
        "arya-purple": "arya-purple.png",
        nova: "nova.png",
        "nova-alt": "nova-alt.png",
        "nova-accent": "nova-accent.png",
        "nova-vue": "nova-vue.png",
        "luna-blue": "luna-blue.png",
        "luna-green": "luna-green.png",
        "luna-pink": "luna-pink.png",
        "luna-amber": "luna-amber.png",
        rhea: "rhea.png",
        "fluent-light": "fluent-light.png",
        "soho-light": "soho-light.png",
        "soho-dark": "soho-dark.png",
        "viva-light": "viva-light.svg",
        "viva-dark": "viva-dark.svg",
        mira: "mira.jpg",
        nano: "nano.jpg",
    };

    constructor(private router: Router,
                private languageService: LanguageService,
                private accountService: AccountService,
                private loginService: LoginService,
                private configService: AppConfigService
    ) {}

    ngOnInit(): void {
        this.config = this.configService.getConfig();
        this.subscription = this.configService.configUpdate$.subscribe(config => this.config = config);

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.activeMenuIndex = null;
             }
        });
    }

    onMenuButtonClick(event: Event): void {
        this.menuButtonClick.emit();
        event.preventDefault();
    }

    changeTheme(event: Event, theme: string, dark: boolean): void {
        const themeElement = document.getElementById("theme-link");
        themeElement.setAttribute("href", themeElement.getAttribute("href").replace(this.config.theme, theme));
        this.configService.updateConfig({...this.config, ...{theme, dark}});
        this.activeMenuIndex = null;
        event.preventDefault();
    }

    changeLanguage(lang: string): void {
        this.languageService.changeLanguage(lang);
        const htmlElement = document.getElementsByTagName("html")[0];
        htmlElement.setAttribute("dir", this.languageService.isLanguageRtl(lang) ? "rtl" : "ltr");
        htmlElement.setAttribute("lang", lang);
        this.addRtlCssIfNeed(lang);
        this.activeMenuIndex =  null;
    }

    private addRtlCssIfNeed(lang: string): void {
        const headTag = document.getElementsByTagName("head")[0];
        if (this.languageService.isLanguageRtl(lang)) {
            let cssElement = document.getElementById("rtl-css");
            if (!cssElement) {
                cssElement = document.createElement("link");
                cssElement.setAttribute("id", "rtl-css");
                cssElement.setAttribute("rel", "stylesheet");
                cssElement.setAttribute("type", "text/css");
                cssElement.setAttribute("href", "assets/showcase/styles/rtl.css");
                headTag.append(cssElement);
            }
        } else {
            const cssElement = document.getElementById("rtl-css");
            if (cssElement) {
                cssElement.remove();
            }
        }
    }

    get currentCountry(): string {
        const lang = this.languageService.getCurrentLanguage();
        return lang === "en" ? "us" : "ir";
    }

    get currentLanguageTitle(): string {
        const lang = this.languageService.getCurrentLanguage();
        return lang === "en" ? "English" : "فارسی";
    }

    get loginLogoutTitle(): string {
        const lang = this.languageService.getCurrentLanguage();
        if (lang === "en") {
            return this.accountService.isAuthenticated() ? "Logout" : "Login";
        } else {
            return this.accountService.isAuthenticated() ? "خروج" : "ورود";
        }
    }

    get isUserAuthenticated(): boolean {
        return this.accountService.isAuthenticated();
    }

    logoutAndNavigateToLogin(): void {
        this.loginService.logout();
        this.router.navigate(["/login"]);
    }

    navigateToLogin(): void {
        this.router.navigate(["/login"]);
    }

    bindOutsideClickListener(): void {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if (this.isOutsideTopbarMenuClicked(event)) {
                    this.activeMenuIndex =  null;
                }
            };

            document.addEventListener("click", this.outsideClickListener);
        }
    }

    unbindOutsideClickListener(): void {
        if (this.outsideClickListener) {
            document.removeEventListener("click", this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }

    toggleMenu(event: Event, index: number): void {
        this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
        event.preventDefault();
    }

    isOutsideTopbarMenuClicked(event): boolean {
        return !(this.topbarMenu.nativeElement.isSameNode(event.target) || this.topbarMenu.nativeElement.contains(event.target));
    }

    onOverlayMenuEnter(event: AnimationEvent): void {
        switch (event.toState) {
            case "visible":
                this.bindOutsideClickListener();
                break;

            case "void":
                this.unbindOutsideClickListener();
                break;
        }
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
