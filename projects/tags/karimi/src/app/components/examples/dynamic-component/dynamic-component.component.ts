import {Component, OnInit} from "@angular/core";
import {DynamicComponent, ComponentType} from "../../../common/model/dynamic-component";
import {IDatePickerDirectiveConfig} from "ng2-jalali-date-picker";
import {DynamicComponentService} from "../../../common/service/dynameicComponentService";
import {LanguageService} from "../../../common/language/language.service";

@Component({
    templateUrl: "./dynamic-component.component.html",
    styleUrls: ["./dynamic-component.component.scss"]
})
export class DynamicComponentComponent implements OnInit {

    dynamicComponents: DynamicComponent[];
    datePickerConfig: IDatePickerDirectiveConfig = {
        drops: "down",
        format: "jYYYY/jMM/jDD",
    };

    constructor(
        private dynamicComponentService: DynamicComponentService,
        private languageService: LanguageService,
    ) {
    }

    ngOnInit(): void {
        this.dynamicComponentService.getDynamicComponents()
            .then(res => {
                this.dynamicComponents = res;
            });
    }

    changeLanguage(lang): void {
        this.languageService.changeLanguage(lang);
    }
}
