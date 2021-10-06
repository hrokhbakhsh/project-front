import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'pmt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _translate: TranslateService) {
    this._translate.addLangs(['fa', 'en']);
    _translate.setDefaultLang('fa');
    _translate.use('fa');
  }
}
