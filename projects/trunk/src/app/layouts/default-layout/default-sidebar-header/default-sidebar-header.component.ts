import {Component, HostListener, OnInit} from '@angular/core';
import {UserInterface} from "../../../shared/interfaces/user.interface";
import {Router} from "@angular/router";
import {SecurityService} from "../../../shared/services/security.service";
import {BtnClosePositionEnum} from "../../shared/enums/sidebar.enum";


@Component({
  selector: 'pmt-default-sidebar-header',
  templateUrl: './default-sidebar-header.component.html',
  styleUrls: ['./default-sidebar-header.component.scss']
})
export class DefaultSidebarHeaderComponent implements OnInit {
  public userAccount: UserInterface | undefined;

  constructor(private _router: Router,
              private _securityService: SecurityService) {}

  ngOnInit(): void {
    this.userAccount = JSON.parse(this._securityService.getTokensFromBrowserStorage());
  }

  get btnClosePositionEnum() {
    return BtnClosePositionEnum;
  }

}
