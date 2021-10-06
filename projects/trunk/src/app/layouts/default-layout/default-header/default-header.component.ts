import {AfterContentInit, Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {LayoutService} from "../../shared/services/layout.service";
import {TranslateService} from "@ngx-translate/core";
import {BtnClosePositionEnum} from "../../shared/enums/sidebar.enum";

@Component({
  selector: 'pmt-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {

  }

  get btnClosePositionEnum() {
    return BtnClosePositionEnum;
  }

}
