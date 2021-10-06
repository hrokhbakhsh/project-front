import { Component, OnInit } from '@angular/core';
import {UserInterface} from "../../../../shared/interfaces/user.interface";
import {Router} from "@angular/router";
import {SecurityService} from "../../../../shared/services/security.service";
import {MatDialog} from "@angular/material/dialog";
import {SettingsDialogComponent} from "../../../default-layout/settings-dialog/settings-dialog.component";

@Component({
  selector: 'pmt-dropdown-profile-menu',
  templateUrl: './dropdown-profile-menu.component.html',
  styleUrls: ['./dropdown-profile-menu.component.scss']
})
export class DropdownProfileMenuComponent implements OnInit {

  userAccount: UserInterface | undefined;
  constructor(private _router: Router,
              private _securityService: SecurityService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userAccount = JSON.parse(this._securityService.getTokensFromBrowserStorage());
  }

  logout() {
    this._securityService.removeTokensFromBrowserStorage();
    this._router.navigate(['/login']);
  }
  openDialogSetting(){
      const dialogRef = this.dialog.open(SettingsDialogComponent,{
        minWidth:"52vw"  ,
    maxWidth:"85vh" ,
        height: "70vh"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

  }
}
