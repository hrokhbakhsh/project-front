import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import {CustomInputTextComponent} from "./input-text/custom-input-text.component";
import {CustomInputNumberComponent} from "./input-number/custom-input-number.component";
import {CustomInputDropdownComponent} from "./input-dropdown/custom-input-dropdown.component";
import {PmtTranslateDirective} from "../common/language/pmt-translate.directive";
import {CustomInputDatepickerComponent} from "./input-datepicker/custom-input-datepicker.component";
import {DpDatePickerModule} from "ng2-jalali-date-picker";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CustomInputTextareaComponent} from "./input-textarea/custom-input-textarea.component";
import {AutocompleteComponent} from "./input-autocomplete/autocomplete.component";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CustomInputPasswordComponent} from "./input-password/custom-input-password.component";
import {PasswordModule} from "primeng/password";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        DropdownModule,
        DpDatePickerModule,
        AutoCompleteModule,
        PasswordModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        DropdownModule,
        CustomInputTextComponent,
        CustomInputNumberComponent,
        CustomInputDropdownComponent,
        CustomInputDatepickerComponent,
        CustomInputTextareaComponent,
        AutocompleteComponent,
        CustomInputPasswordComponent,
        PmtTranslateDirective,
    ],
    declarations: [
        CustomInputTextComponent,
        CustomInputNumberComponent,
        CustomInputDropdownComponent,
        CustomInputDatepickerComponent,
        CustomInputTextareaComponent,
        AutocompleteComponent,
        CustomInputPasswordComponent,
        PmtTranslateDirective
    ]
})
export class WidgetModule {
}
