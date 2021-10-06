import {Component, Input, OnInit} from '@angular/core';
import {BoxOption} from "../pmt-fast-report-box/pmt-fast-report-box.interfaces";

@Component({
  selector: 'pmt-card',
  templateUrl: './pmt-card.component.html',
  styleUrls: ['./pmt-card.component.scss']
})
export class PmtCardComponent implements OnInit {

  @Input() showTitle = true;
  @Input() color = 'card-header-info';
  @Input() title: string | undefined;
  @Input() subTitle: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
