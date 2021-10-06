import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {ITable} from "./grouping-person";
import {SelectionModel} from "@angular/cdk/collections";
import {IList} from "../../../core/inputs/IList";
import {TranslateService} from "@ngx-translate/core";
import {Direction, Directionality} from "@angular/cdk/bidi";
import {Subscription} from "rxjs";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

const ELEMENT_DATA: ITable[] = [
  {position: '', groupName: 'پزشک معتمد', name: 'نوروزی', edit: ''},
  {position: '', groupName: 'پزشک معتمد', name: 'نوروزی', edit: ''},
  {position: '', groupName: 'پزشک معتمد', name: 'نوروزی', edit: ''},
  {position: '', groupName: 'پزشک معتمد', name: 'نوروزی', edit: ''},
  {position: '', groupName: 'پزشک معتمد', name: 'نوروزی', edit: ''},
  {position: '', groupName: 'پزشک معتمد', name: 'نوروزی', edit: ''},

];

@Component({
  selector: 'pmt-grouping-person',
  templateUrl: './grouping-person.component.html',
  styleUrls: ['./grouping-person.component.scss']
})
export class GroupingPersonComponent implements OnInit {
  title = "";

  groupingForm = this._fb.group({
    personType: [''],
    namePerson: [''],
    idCard: ['']
  });

  direction$: Subscription | undefined;

  personType: IList[] = [
    {
      value: 'realPerson',
      label: this._translate.instant('pages.grouping-person.grouping-person.type-person-list.real-person')
    },
    {
      value: 'legalPerson',
      label: this._translate.instant('pages.grouping-person.grouping-person.type-person-list.legal-person')
    },
  ]
  constructor(private _fb: FormBuilder,
              private _translate: TranslateService,
              private _direction: Directionality,
              private _titleService: Title,
              private _activatedRoute: ActivatedRoute) {
  }

  public show: boolean = false;
  public buttonName: any = 'Show';
  displayedColumns: string[] = ['position', 'groupName', 'name', 'edit'];
  dataSource = [...ELEMENT_DATA];
  dataSourcee = new MatTableDataSource<ITable>(ELEMENT_DATA);
  selection = new SelectionModel<ITable>(true, []);

  @ViewChild(MatTable) table: MatTable<ITable> | undefined;


  removeData() {


  }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(data => {
      this.title = data.title;
      this._titleService.setTitle(this._translate.instant(this.title))
    })
    this.direction$ = this._direction.change.subscribe((value: Direction) => {
      this._titleService.setTitle(this._translate.instant(this.title))

      this.personType = [
        {
          value: 'realPerson',
          label: this._translate.instant('pages.grouping-person.grouping-person.type-person-list.real-person')
        },
        {
          value: 'legalPerson',
          label: this._translate.instant('pages.grouping-person.grouping-person.type-person-list.legal-person')
        },
      ]

    })

  }

  submitted() {

  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourcee.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSourcee.data);
  }

  checkboxLabel(row?: ITable): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
