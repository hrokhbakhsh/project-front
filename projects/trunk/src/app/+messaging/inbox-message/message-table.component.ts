import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Message} from "../message";
import {MessageService} from "../message.service";






@Component({
  selector: 'pmt-message-table',
  templateUrl: './message-table.component.html',
  styleUrls: ['./message-table.component.scss']
})
export class MessageTableComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['id', 'title', 'body', 'date', 'delete'];

  dataSource: MatTableDataSource<Message>;

  constructor(private  _getMessageDataTable: MessageService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Message>(this._getMessageDataTable.getMessageData());
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
