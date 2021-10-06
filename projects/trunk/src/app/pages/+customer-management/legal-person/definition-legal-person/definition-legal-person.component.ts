import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IList} from "../../../../core/inputs/IList";
import {TranslateService} from "@ngx-translate/core";
import {Direction, Directionality} from "@angular/cdk/bidi";
import {Subscription} from "rxjs";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pmt-definition-legal-person',
  templateUrl: './definition-legal-person.component.html',
  styleUrls: ['./definition-legal-person.component.scss']
})
export class DefinitionLegalPersonComponent implements OnInit, OnDestroy {



  legalSituationOption: IList[] = [
    {
      value: 'governmental',
      label: this._translate.instant('pages.customer-management.legal-person.definition-legal-person.governmental')
    },
    {
      value: 'personal',
      label: this._translate.instant('pages.customer-management.legal-person.definition-legal-person.personal')
    },
  ];

  typeLegalEntityOption:  IList[] = [
    {
      value: 'limited-liability-company',
      label: this._translate.instant('pages.customer-management.legal-person.definition-legal-person.company')
    }
  ]

  form = this._fb.group({
    code : this.
      _fb.group({
      personalCode: [''],
      nationalFatherCode: [''],
      subCode: ['']
    }),
    LegalEntityInformation : this._fb.group({
      title: [''],
      name: [''],
      nickName: [''],
      establishedDate: [''],
      statusBasicKnowledge: ['']
    }),
    RegistrationInformation : this._fb.group({
      registrationNumber: [''],
      codeInsurance: [''],
      legalStatus: [''],
      economicCode: [''],
      typeLegalEntity: [''],
      currentStatusPerson: ['']
    }),
    RegistrationContact : this._fb.group({
      address: [''],
      postalCode: [''],
      email: [''],
      mailBox: [''],
      mobileNumber: [''],
      fax: [''],
      phone: ['']
    })
  })

  constructor(private _fb: FormBuilder,
              private _translate: TranslateService,
              private _titleService: Title,
              private _activateRoute: ActivatedRoute,
              private  _direction: Directionality) {
  }
  direction$: Subscription| undefined;
  activatedRoute$: Subscription| undefined;

  ngOnInit(): void {
    this.direction$ = this._direction.change.subscribe((value: Direction) => {

      this.setTitle()
      this.legalSituationOption = [
        {
          value: 'governmental',
          label: this._translate.instant('pages.customer-management.legal-person.definition-legal-person.governmental')
        },
        {
          value: 'personal',
          label: this._translate.instant('pages.customer-management.legal-person.definition-legal-person.personal')
        },
      ];

      this.typeLegalEntityOption =[
        {
          value: 'limited-liability-company',
          label: this._translate.instant('pages.customer-management.legal-person.definition-legal-person.company')

        }
      ]
    })

    this.setTitle()
  }
  submitted() {
    console.log(this.form.value)
  }

  setTitle(){
    this.activatedRoute$ = this._activateRoute.data.subscribe(data => {
      this._titleService.setTitle(this._translate.instant(data.title))
    })
  }

  ngOnDestroy() {
    this.direction$?.unsubscribe();
  }
}
