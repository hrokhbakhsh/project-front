import {Component, Input} from "@angular/core";
import {AbstractValueAccessor, MakeProvider} from "../AbstractValueAccessor";

@Component({
    selector: "app-input-text",
    templateUrl: "./custom-input-text.component.html",
    providers: [MakeProvider(CustomInputTextComponent)]
})
export class CustomInputTextComponent extends AbstractValueAccessor {

    @Input() id: string;
    @Input() label: string;
    @Input() isRequired = false;
    @Input() containerCssClass: string;
    @Input() icon: string;
    @Input() placeholder = "";
    @Input() iconDirection: "left" | "right" ;

    isInvalid(): boolean {
        return this.isRequired && this.value === "";
    }
}
