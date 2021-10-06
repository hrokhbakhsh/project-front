import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {IInbox} from "../IInbox";
import {InboxService} from "../inbox.service";
import {SelectionModel} from "@angular/cdk/collections";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";
import {Direction, Directionality} from "@angular/cdk/bidi";
import {Subscription} from "rxjs";
import {IButton} from "../../core/pmt-buttons/IButton";

@Component({
  selector: 'pmt-message-table',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, AfterViewInit {




  displayedColumns: string[] = ['select', 'id', 'title', 'body', 'date', 'delete'];

  dataSource: any;
  selection = new SelectionModel<IInbox>(true, []);

  /*checkbox section*/
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: IInbox): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  /*checkbox section*/
  /*sort table*/


  @ViewChild(MatSort) sort: MatSort | any;

  /*sort table*/
  title = "";
  direction$: Subscription | undefined;


  constructor(private _getMessageDataTable: InboxService,
              private titleService: Title,
              private _translate: TranslateService,
              private _direction: Directionality,
              private activatedRoute: ActivatedRoute) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<IInbox>(this._getMessageDataTable.getMessageData());
    this.activatedRoute.data.subscribe(data => {
      this.title = data.title;
      this.titleService.setTitle(this._translate.instant(this.title))
    })

    this.direction$ = this._direction.change.subscribe((value: Direction) => {
      this.titleService.setTitle(this._translate.instant(this.title))
    })

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
}
