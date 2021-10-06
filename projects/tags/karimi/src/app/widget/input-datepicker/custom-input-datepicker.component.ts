import {Component, Input} from "@angular/core";
import {AbstractValueAccessor, MakeProvider} from "../AbstractValueAccessor";
import {IDatePickerDirectiveConfig} from "ng2-jalali-date-picker";

@Component({
    selector: "app-input-datepicker",
    templateUrl: "./custom-input-datepicker.component.html",
    providers: [MakeProvider(CustomInputDatepickerComponent)]
})
export class CustomInputDatepickerComponent extends AbstractValueAccessor {

    @Input() id: string;
    @Input() label = "entity.field.datetime";
    @Input() isRequired = false;
    @Input() containerCssClass: string;
    @Input() datePickerConfig: IDatePickerDirectiveConfig = {
        drops: "down",
        format: "jYYYY/jMM/jDD",
    };


    isInvalid(): boolean {
        return this.isRequired && this.value === "";
    }

}
