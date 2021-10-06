import {Component, Input, EventEmitter, Output} from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import {LanguageService} from "./common/language/language.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-menu",
    template: `
        <div [class]="'layout-sidebar ' + addRtlClass" [ngClass]="{'active': active}">
            <div class="layout-menu" *pmtHasAnyAuthority="'ROLE_USER'">
                <div class="menu-category">Menu</div>
                <div class="menu-items">
                    <a tabindex="0" (click)="toggleSubmenu($event, '/user-management/dashboard'); callAfterItemClick()">User Management</a>
                    <div [@submenu]="isSubmenuActive('/user-management/dashboard') ? 'visible': 'hidden'">
                        <ul>
                            <li>
                                <a [routerLink]=" ['/user-management/dashboard']"
                                   routerLinkActive="router-link-exact-active"
                                   [routerLinkActiveOptions]="{exact:true}">Dashboard</a>
                            </li>
                            <li>
                                <a [routerLink]=" ['/user-management/user-list']"
                                   routerLinkActive="router-link-exact-active"
                                   [routerLinkActiveOptions]="{exact:true}">User list</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="layout-menu" *pmtHasAnyAuthority="'ROLE_USER'">
                <div class="menu-category">Examples</div>
                <div class="menu-items">
                    <a (click)="callAfterItemClick()"
                       [routerLink]=" ['example/mypage']"
                       routerLinkActive="router-link-exact-active">My Page</a>
                </div>
                <div class="menu-items">
                    <a (click)="callAfterItemClick()"
                       [routerLink]=" ['example/custom-component']"
                       routerLinkActive="router-link-exact-active">Custom component</a>
                </div>
                <div class="menu-items">
                    <a (click)="callAfterItemClick()"
                       [routerLink]=" ['example/dynamic-component']"
                       routerLinkActive="router-link-exact-active">Dynamic component</a>
                </div>
                <div class="menu-items">
                    <a (click)="callAfterItemClick()"
                       [routerLink]=" ['example/product-group']"
                       routerLinkActive="router-link-exact-active">Product Group</a>
                </div>
                <div class="menu-items">
                    <a (click)="callAfterItemClick()"
                       [routerLink]=" ['example/icons']"
                       routerLinkActive="router-link-exact-active">Icons</a>
                </div>
            </div>
        </div>
    `,
    animations: [
        trigger("submenu", [
            state("hidden", style({
                height: "0",
                overflow: "hidden",
                opacity: 0,
            })),
            state("visible", style({
                height: "*",
                opacity: 1
            })),
            transition("* <=> *", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")),
        ])
    ]
})
export class AppMenuComponent {

    @Input() active: boolean;
    @Output() afterItemClick = new EventEmitter<void>();
    activeSubmenus: {[key: string]: boolean} = {};

    constructor(
        private languageService: LanguageService,
        private router: Router,
    ) {
    }

    callAfterItemClick(): void {
        this.afterItemClick.emit();
    }

    get addRtlClass(): string {
        return this.languageService.isCurrentLanguageRtl() ? "ui-rtl" : "";
    }

    toggleSubmenu(event: Event, name: string): void {
        this.activeSubmenus[name] = !this.activeSubmenus[name];
        event.preventDefault();
    }

    isSubmenuActive(name: string): boolean {
        if (this.activeSubmenus.hasOwnProperty(name)) {
            return this.activeSubmenus[name];
        }
        else if (this.router.isActive(name, false)) {
            this.activeSubmenus[name] = true;
            return true;
        }
        return false;
    }
}
