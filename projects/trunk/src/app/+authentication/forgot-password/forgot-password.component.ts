import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Directionality} from "@angular/cdk/bidi";
import {Subscription} from "rxjs";

@Component({
  selector: 'pmt-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit , OnDestroy{
  public forgotPasswordForm = this._fb.group({
    userName: [null, Validators.required]
  });


  direction$: Subscription | undefined;
  activatedRoute$: Subscription | undefined;

  constructor(private _translate: TranslateService,
              private _titleService: Title,
              private _activateRoute: ActivatedRoute,
              private _direction: Directionality,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.setTitle();
    this.direction$ = this._direction.change.subscribe(value => {
      this.setTitle();

    })
  }

  setTitle() {
    this.activatedRoute$ = this._activateRoute.data.subscribe(data => {
      this._titleService.setTitle(this._translate.instant(data.title))
    })
  }
  ngOnDestroy() {
    this.direction$?.unsubscribe();
    this.activatedRoute$?.unsubscribe();
  }
}
