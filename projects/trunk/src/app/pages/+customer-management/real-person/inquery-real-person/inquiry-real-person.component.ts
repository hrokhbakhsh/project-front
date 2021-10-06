import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IList} from "../../../../core/inputs/IList";
import {TranslateService} from "@ngx-translate/core";
import {Directionality} from "@angular/cdk/bidi";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pmt-inquiry-real-person',
  templateUrl: './inquiry-real-person.component.html',
  styleUrls: ['./inquiry-real-person.component.scss']
})
export class InquiryRealPersonComponent implements OnInit {
  title = "";

  form = this._fb.group({
    nation: [''],
    idCard: [''],
    birthDate: [''],
    foreignNationalCode: ['']
  })

  option: IList[] = [
    {
      value: 'female',
      label: 'female'
    },
    {
      value: 'male',
      label: 'male'
    },

  ]

  constructor(private _fb: FormBuilder,
              private _translate: TranslateService,
              private  _direction: Directionality,
              private _titleService: Title,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(data => {
      this.title = data.title;
      this._titleService.setTitle(this._translate.instant(this.title))
    })
  }

  submitted() {
    console.log(this.form.value)
  }
}
