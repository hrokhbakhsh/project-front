import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'pmt-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss']
})
export class ChangeLanguageComponent implements OnInit {
  public languages: string[] | undefined;
  public currentLang: string | undefined;

  constructor(private _translate: TranslateService) { }

  ngOnInit(): void {
    this.languages = this._translate.getLangs();
    this.currentLang = this._translate.currentLang;
  }

  public changeLanguage(lang: string) {
    this._translate.use(lang);
  }

}
