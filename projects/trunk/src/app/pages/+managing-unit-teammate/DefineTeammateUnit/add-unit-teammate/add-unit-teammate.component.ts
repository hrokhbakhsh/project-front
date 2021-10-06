import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IList} from "../../../../core/inputs/IList";
import {TranslateService} from "@ngx-translate/core";
import {Direction, Directionality} from "@angular/cdk/bidi";
import {Subscription} from "rxjs";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pmt-add-unit-teammate',
  templateUrl: './add-unit-teammate.component.html',
  styleUrls: ['./add-unit-teammate.component.scss']
})
export class AddUnitTeammateComponent implements OnInit, OnDestroy {

  title = "";

  UnitTypeOption: IList[] = [
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

  damageLicenseOption: IList[] = [
    {
      value: 'Licensing',
      label: this._translate.instant('pages.unit-teammate.damage-license-list.Licensing')
    },
    {
      value: 'engineeringLicense',
      label: this._translate.instant('pages.unit-teammate.damage-license-list.engineering-license')

    },
    {
      value: 'energyExportLicense',
      label: this._translate.instant('pages.unit-teammate.damage-license-list.energy-export-license')
    },
  ]

  issuanceLicenseOption: IList[] = [
    {
      value: 'compensationLicenseLiable',
      label: this._translate.instant('pages.unit-teammate.issuance-license-option.compensation-license-liable')
    },
    {
      value: 'licensedPayEngineeringDamage',
      label: this._translate.instant('pages.unit-teammate.issuance-license-option.licensed-pay-engineering-damage')

    },
    {
      value: 'licensedPayEnergyDamages',
      label: this._translate.instant('pages.unit-teammate.issuance-license-option.licensed-pay-energy-damages')
    },
  ]


  constructor(private _fb: FormBuilder,
              private _direction: Directionality,
              private _translate: TranslateService,
              private _titleService: Title,
              private _activatedRoute: ActivatedRoute
  ) {
  }

  direction$: Subscription | undefined;


  unitTeammateForm = this._fb.group({
    codeForm: this._fb.group({
      code: [''],
      subCode: [''],
      teammateUnitType: [''],
      upstream: [''],
      geographicLocation: [''],
      effectiveHistory: [''],
      centralInsuranceUniqueCode: [''],
      degree: [''],
      paymentCreditDate: [''],
      title: [''],
      teammateActive: ['']
    }),
    LicenseTeammateForm: this._fb.group({
      DamageLicense: [''],
      IssuanceOfLicense: [''],
    }),
    personalInfoTeammateForm: this._fb.group({
      phoneNumber: [''],
      mobileNumber: [''],
      postalCode: [''],
      fax: [''],
      email: [''],
      workPhone: [''],
      mailBox: [''],
      workAddress: [''],
      address: [''],
    }),

  });

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(data => {
      this.title = data.title;
      this._titleService.setTitle(this._translate.instant(this.title))
    })
    this.direction$ = this._direction.change.subscribe((value: Direction)  => {
      this.UnitTypeOption = [
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
      this.damageLicenseOption = [
        {
          value: 'Licensing',
          label: this._translate.instant('pages.unit-teammate.damage-license-list.Licensing')
        },
        {
          value: 'engineeringLicense',
          label: this._translate.instant('pages.unit-teammate.damage-license-list.engineering-license')

        },
        {
          value: 'energyExportLicense',
          label: this._translate.instant('pages.unit-teammate.damage-license-list.energy-export-license')
        },
      ]
      this.issuanceLicenseOption = [
        {
          value: 'compensationLicenseLiable',
          label: this._translate.instant('pages.unit-teammate.issuance-license-option.compensation-license-liable')
        },
        {
          value: 'licensedPayEngineeringDamage',
          label: this._translate.instant('pages.unit-teammate.issuance-license-option.licensed-pay-engineering-damage')

        },
        {
          value: 'licensedPayEnergyDamages',
          label: this._translate.instant('pages.unit-teammate.issuance-license-option.licensed-pay-energy-damages')
        },
      ]
    })


  }

  submitted() {
    console.log(this.unitTeammateForm.value)
  }

  ngOnDestroy() {
    this.direction$?.unsubscribe()
  }
}
