import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {IList} from "../../../../core/inputs/IList";
import {TranslateService} from "@ngx-translate/core";
import {Direction, Directionality} from "@angular/cdk/bidi";
import {Subscription} from "rxjs";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pmt-real-person',
  templateUrl: './definition-real-person.component.html',
  styleUrls: ['./definition-real-person.component.scss']
})
export class DefinitionRealPersonComponent implements OnInit, OnDestroy {
  title = "";

  option: IList[] = [
    {
      value: 'female',
      label: this._translate.instant('pages.customer-management.real-person.female')
    },
    {
      value: 'male',
      label: this._translate.instant('pages.customer-management.real-person.male')
    },

  ];

  form = this._fb.group({
    personalCode: [''],
    personalInformation: this._fb.group({
        certificate: [''],
      name: ['',[Validators.required]],
      family: [''],
      father: [''],
      idCard: ['',[Validators.required]],
      passportId: [''],
      currentStatus: [''],
      placeIssue: [''],
      yearIssue: [''],
      birthDate: [''],
      sex: ['', [Validators.required]]
    }),


    contacts: this._fb.group({
      address: ['',[Validators.required]],
      postalCode: [''],
      email: ['',[Validators.email]],
      mailBox: [''],
      mobileNumber: [''],
      fax: [''],
      phone: [''],
      workAdress:[''],
      city:['']
    })
  })

  constructor(private _fb: FormBuilder,
              private _translate: TranslateService,
              private  _direction: Directionality,
              private _titleService: Title,
              private _activatedRoute: ActivatedRoute) {

  }
  direction$: Subscription | undefined ;

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(data => {
      this.title = data.title;
      this._titleService.setTitle(this._translate.instant(this.title))
    })
    this.direction$ = this._direction.change.subscribe((value: Direction) => {

      this.option = [
        {
          value: 'female',
          label: this._translate.instant('pages.customer-management.real-person.female')
        },
        {

          value: 'male',
          label: this._translate.instant('pages.customer-management.real-person.male')
        },

      ]
    })
  }
  submitted() {
    console.log(this.form.value)
  }

  ngOnDestroy() {
    this.direction$?.unsubscribe();
  }

}
