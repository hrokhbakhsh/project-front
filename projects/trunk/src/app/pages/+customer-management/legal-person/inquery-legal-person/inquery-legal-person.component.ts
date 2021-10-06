import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../core/dynamic-form/data.service";
import {FormBuilder, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Directionality} from "@angular/cdk/bidi";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'pmt-inquery-legal-person',
  templateUrl: './inquery-legal-person.component.html',
  styleUrls: ['./inquery-legal-person.component.scss']
})
export class InqueryLegalPersonComponent implements OnInit {
  title = "";

  //dataModel : JsonFormData | any;

  form = this._fb.group({
    idCard: [''],
    nation: [''],
    nationalFatherId: [''],
    subsidiaryCode: [''],
    foreignNationalCode: ['']
  })

  constructor(private _fb: FormBuilder,
              private _translate: TranslateService,
              private  _direction: Directionality,
              private _titleService: Title,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }


  direction$: Subscription| undefined;
  activatedRoute$: Subscription| undefined;

  ngOnInit(): void {
    console.log(this._router);
    console.log(this._activatedRoute);
    // @ts-ignore
    console.log(this._activatedRoute.snapshot['_urlSegments']);

    this.setTitle();
    this.direction$ = this._direction.change.subscribe(value => {
      this.setTitle();

    })
  }


  setTitle(){
    this.activatedRoute$ = this._activatedRoute.data.subscribe(data => {
      this._titleService.setTitle(this._translate.instant(data.title))
    })
  }

  submit() {
    console.log(this.form.value)
  }
}
