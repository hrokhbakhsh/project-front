import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserInterface} from "../../shared/interfaces/user.interface";
import { Router} from "@angular/router";
import {LayoutService} from "../shared/services/layout.service";
import {SecurityService} from "../../shared/services/security.service";
import {Direction, Directionality} from "@angular/cdk/bidi";
import { MatDrawerMode } from '@angular/material/sidenav';
import {BehaviorSubject, Subscription} from "rxjs";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'pmt-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  userAccount: UserInterface | undefined;
  sidenavIsOpenedSubject: boolean | undefined;
  appDrawer: any;
  mode: MatDrawerMode= 'side';


  navItems: any | undefined;
  position: 'end'  |'start' = 'start';


  directionSubscription$: Subscription | undefined ;
  sidenavIsOpenSubscription$: Subscription | undefined ;
  windowResizeSubscription$: Subscription | undefined ;

  constructor(private _router: Router,
              private _layoutService: LayoutService,
              private  _direction: Directionality,
              private _securityService: SecurityService) {
  }
  ngOnInit(): void {
    this.directionSubscription$ = this._direction.change.subscribe((value: Direction) => {
      if (value == 'ltr'){
        this.position = 'end';
      }else {
        this.position = 'start';
      }
    })

    this.windowResizeSubscription$ = this._layoutService.windowResize
      .pipe(distinctUntilChanged())
      .subscribe(value => {
      if(value == true){
        this.mode = 'side'
      }
      if(value == false){
        this.mode = 'over'
      }
    })
    this.userAccount = JSON.parse(this._securityService.getTokensFromBrowserStorage());

    this.navItems = this._layoutService.getMenus();

    setTimeout(() => {
      this.sidenavIsOpenSubscription$ = this._layoutService.sidenavIsOpenedSubject.subscribe((res: boolean) => {
        this.sidenavIsOpenedSubject = res;
      })
    })

    this.appDrawer = this._layoutService.appDrawer;
  }

  sideBarMode(){
    return this.mode;
  }

  ngBackdropClick(event: any){
    this._layoutService.sidenavIsOpenedSubject.next(false);
  }

  ngOnDestroy() {
    this.directionSubscription$?.unsubscribe();
    this.sidenavIsOpenSubscription$?.unsubscribe();
    this.windowResizeSubscription$?.unsubscribe()
  }
}
