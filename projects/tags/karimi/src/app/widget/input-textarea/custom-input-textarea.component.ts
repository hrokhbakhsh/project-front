import {Component, Input} from "@angular/core";
import {AbstractValueAccessor, MakeProvider} from "../AbstractValueAccessor";

@Component({
    selector: "app-input-textarea",
    templateUrl: "./custom-input-textarea.component.html",
    providers: [MakeProvider(CustomInputTextareaComponent)]
})
export class CustomInputTextareaComponent extends AbstractValueAccessor {

    @Input() id: string;
    @Input() label: string;
    @Input() isRequired = false;
    @Input() containerCssClass: string;
    @Input() placeholder = "";

    isInvalid(): boolean {
        return this.isRequired && this.value === "";
    }

}
