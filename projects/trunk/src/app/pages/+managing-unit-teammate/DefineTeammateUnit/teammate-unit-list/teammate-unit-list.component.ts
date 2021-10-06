import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ITeammateUnitList} from "./teammate-unit-list";
import {Direction, Directionality} from "@angular/cdk/bidi";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {IList} from "../../../../core/inputs/IList";
import {Subscription} from "rxjs";

const ELEMENT_DATA: ITeammateUnitList[] = [
  {
    row: 1,
    teammateTitle: '',
    teammateType: '',
    teammateDrgree: '',
    upstream: '',
    teammateStatus: '',
    show: '',
    edit: ''
  },
  {
    row: 2,
    teammateTitle: '',
    teammateType: '',
    teammateDrgree: '',
    upstream: '',
    teammateStatus: '',
    show: '',
    edit: ''
  },
  {
    row: 3,
    teammateTitle: '',
    teammateType: '',
    teammateDrgree: '',
    upstream: '',
    teammateStatus: '',
    show: '',
    edit: ''
  },
  {
    row: 4,
    teammateTitle: '',
    teammateType: '',
    teammateDrgree: '',
    upstream: '',
    teammateStatus: '',
    show: '',
    edit: ''
  },


];

@Component({
  selector: 'pmt-teammate-unit-list',
  templateUrl: './teammate-unit-list.component.html',
  styleUrls: ['./teammate-unit-list.component.scss']
})
export class TeammateUnitListComponent implements OnInit , OnDestroy {
  title = "";
  yesOrNo: IList[] = [
    {
      value: 'yes',
      label: this._translate.instant('global.yes')
    },
    {
      value: 'no',
      label: this._translate.instant('global.no')
    }
  ]

  unitTypeOption: IList[] = [
    {
      value: 'headquarters',
      label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.headquarters')
    },
    {
      value: 'state',
      label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.state')
    },
    {
      value: 'branch',
      label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.branch')
    },
    {
      value: 'realRepresentation',
      label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.real-representation')
    },
    {
      value: 'representationCompany',
      label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.representation-company')
    },
    {
      value: 'realBroker',
      label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.real-broker')
    },
    {
      value: 'legalBroker',
      label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.legal-broker')
    },
    {
      value: 'representativeLife',
      label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.representative-life')
    },
  ];


  direction$ : Subscription | undefined;
  activatedRoute$ : Subscription | undefined;


  constructor(private _fb: FormBuilder,
              private _direction: Directionality,
              private _translate: TranslateService,
              private _titleService: Title,
              private _activatedRoute: ActivatedRoute) {
  }

  displayedColumns: string[] = ['row', 'teammateTitle', 'teammateType', 'teammateDrgree','upstream','show','edit'];
  dataSource = ELEMENT_DATA;

  teammateUnitList = this._fb.group({
    teammateUnit: [''],
    teammateUnitType: [''],
    informationTeammateUnits: [''],
    previousRecordsTeammateUnit: ['']
  });

  ngOnInit(): void {
    this.activatedRoute$ = this._activatedRoute.data.subscribe(data => {
      this.title = data.title;
      this._titleService.setTitle(this._translate.instant(this.title))
    })
    this.direction$ =this._direction.change.subscribe((value: Direction)  => {
      this.unitTypeOption =  [
        {
          value: 'headquarters',
          label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.headquarters')
        },
        {
          value: 'state',
          label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.state')
        },
        {
          value: 'branch',
          label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.branch')
        },
        {
          value: 'realRepresentation',
          label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.real-representation')
        },
        {
          value: 'representationCompany',
          label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.representation-company')
        },
        {
          value: 'realBroker',
          label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.real-broker')
        },
        {
          value: 'legalBroker',
          label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.legal-broker')
        },
        {
          value: 'representativeLife',
          label: this._translate.instant('pages.unit-teammate.define-teammate-unit.list-teammate.teammate-unit-type-list.representative-life')
        },
      ];

      this._activatedRoute.data.subscribe(data => {
        this.title = data.title;
        this._titleService.setTitle(this._translate.instant(this.title))
      })
    })

  }

  submitted() {
    console.log(this.teammateUnitList.value);

  }

  ngOnDestroy() {
    this.direction$?.unsubscribe();
    this.activatedRoute$?.unsubscribe();
  }
}
