import {Directive, ElementRef, Renderer2} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LayoutService} from "../../services/layout.service";

@Directive({
  selector: '[pmtMaximize]',
  exportAs: 'pmtMaximize'
})
export class MaximizeDirective {
  private _sidenavIsOpenedSubject: boolean | undefined;
  private _sidenavChangeStatus = false;
  private isMaximizedSubject = new BehaviorSubject(false);
  isMaximized$ = this.isMaximizedSubject.pipe();

  constructor(private el: ElementRef, private renderer: Renderer2,
              private _layoutService: LayoutService) {
    this._layoutService.sidenavIsOpenedSubject.subscribe((res: boolean) => {
      this._sidenavIsOpenedSubject = res;
    })
  }

  toggle() {
    this.isMaximizedSubject?.getValue() ? this.minimize() : this.maximize();
  }

  maximize() {
    this._sidenavChangeStatus = false
    if (this.el) {
      this.isMaximizedSubject.next(true);
      this.renderer.addClass(this.el.nativeElement, "fullscreen");
      if (this._sidenavIsOpenedSubject) {
        this._sidenavChangeStatus = true
        this._layoutService.sidenavIsOpenedSubject.next(false);
      }
    }
  }

  minimize() {
    if (this.el) {
      this.isMaximizedSubject.next(false);
      this.renderer.removeClass(this.el.nativeElement, "fullscreen");
      if (!this._sidenavIsOpenedSubject && this._sidenavChangeStatus) {
        this._layoutService.sidenavIsOpenedSubject.next(true);
      }
    }
  }

}
