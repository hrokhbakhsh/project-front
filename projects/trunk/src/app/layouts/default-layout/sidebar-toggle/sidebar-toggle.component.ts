import {Component, HostListener, Input, OnInit} from '@angular/core';
import {LayoutService} from "../../shared/services/layout.service";
import {BtnClosePositionEnum} from "../../shared/enums/sidebar.enum";

@Component({
  selector: 'pmt-sidebar-toggle',
  templateUrl: './sidebar-toggle.component.html',
  styleUrls: ['./sidebar-toggle.component.scss']
})
export class SidebarToggleComponent implements OnInit {
  public sidenavIsOpend: boolean | undefined;
  private _width = window.innerWidth;
  @Input() parentName: string | undefined;
  @HostListener("window:resize", [])

  public onResize() {
    this._detectScreenSize();
  }
  constructor(private _layoutService: LayoutService) {
    this._detectScreenSize();
  }

  get btnClosePositionEnum() {
    return BtnClosePositionEnum;
  }

  ngOnInit(): void {
    this._layoutService.sidenavIsOpenedSubject.subscribe((res: boolean) => {
      this.sidenavIsOpend = res;
    });

    this._layoutService.windowResize.subscribe((value: boolean) => {
      this._layoutService.sidenavIsOpenedSubject.next(value);
    })
  }

  private _detectScreenSize() {
    this._width = window.innerWidth;
    if (this._width < 900) {
      this._layoutService.windowResize.next(false);


    }
    if (this._width > 900) {
      this._layoutService.windowResize.next(true);
    }
  }

  toggleSidenav() {
    this.sidenavIsOpend = !this.sidenavIsOpend;
    this._layoutService.sidenavIsOpenedSubject.next(this.sidenavIsOpend);

  }
}
