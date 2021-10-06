import {NgModule} from "@angular/core";
import {PmtTranslateDirective} from "../common/language/pmt-translate.directive";
import {WidgetModule} from "../widget/widget.module";
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import {AppCodeModule} from "../app.code.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {DialogModule} from "primeng/dialog";
import {TooltipModule} from "primeng/tooltip";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ToastModule} from "primeng/toast";
import {TranslateModule} from "@ngx-translate/core";
import {HasAnyAuthorityDirective} from "../common/auth/has-any-authority.directive";

@NgModule({
    imports: [
        WidgetModule,
        ButtonModule,
        TabViewModule,
        AppCodeModule,
        InputTextareaModule,
        CheckboxModule,
        RadioButtonModule,
        TableModule,
        MultiSelectModule,
        DialogModule,
        TooltipModule,
        AutoCompleteModule,
        ToastModule,
        TranslateModule,
    ],
    exports: [
        WidgetModule,
        ButtonModule,
        TabViewModule,
        AppCodeModule,
        InputTextareaModule,
        CheckboxModule,
        RadioButtonModule,
        TableModule,
        MultiSelectModule,
        DialogModule,
        TooltipModule,
        AutoCompleteModule,
        ToastModule,
        HasAnyAuthorityDirective,
    ],
    declarations: [
        HasAnyAuthorityDirective,
    ]
})
export class SharedModule {
}
