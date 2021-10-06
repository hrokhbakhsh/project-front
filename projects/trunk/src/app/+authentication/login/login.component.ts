import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SecurityService} from "../../shared/services/security.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserModel} from "../../shared/models/user.model";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import {Directionality} from "@angular/cdk/bidi";
import {Subscription} from "rxjs";

@Component({
  selector: 'pmt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm = this._fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required]
  });




  constructor(private _translate: TranslateService,
              private _titleService: Title,
              private _activateRoute: ActivatedRoute,
              private _direction: Directionality,
              private _fb: FormBuilder,
              private _router: Router,
              private _securityService: SecurityService) {
  }


  direction$: Subscription| undefined;
  activatedRoute$: Subscription| undefined;

  ngOnInit() {
  this.setTitle();
    this.direction$ = this._direction.change.subscribe(value => {
      this.setTitle();

    })
  }

  setTitle(){
    this.activatedRoute$ = this._activateRoute.data.subscribe(data => {
      this._titleService.setTitle(this._translate.instant(data.title))
    })
  }

  doSubmitLoginForm() {
    if (this.loginForm.valid && this.loginForm.value.userName === 'admin' && this.loginForm.value.userName === 'admin') {
      const token = new UserModel(
        'Admin',
        'Admin',
        'sdkjfgbsk8e@e343'
      )
      this._securityService.addTokensToBrowserStorage(JSON.stringify(token));
      this._router.navigate(['/panel']);
    }
  }

  ngOnDestroy() {
    this.direction$?.unsubscribe();
    this.activatedRoute$?.unsubscribe();
  }
}
