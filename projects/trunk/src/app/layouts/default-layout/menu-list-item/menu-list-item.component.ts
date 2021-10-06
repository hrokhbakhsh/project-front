import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";
import {LayoutService} from "../../shared/services/layout.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'pmt-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ])
  ]
})
export class MenuListItemComponent implements OnInit, OnDestroy{
  private _width = window.innerWidth
  expanded: boolean = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: any;
  @Input() depth: number = 0;


  currentUrlSubscription$: Subscription | undefined ;

  constructor(private _layoutService: LayoutService,
              public router: Router) {

    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.currentUrlSubscription$ = this._layoutService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: any) {

    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]).then();

      this._width = window.innerWidth;
      if (this._width < 900) {
        this._layoutService.sidenavIsOpenedSubject.next(false);
      }
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
  ngOnDestroy() {
    this.currentUrlSubscription$?.unsubscribe();
  }
}
