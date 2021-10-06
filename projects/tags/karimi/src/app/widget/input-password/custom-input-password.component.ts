import {Component, Input} from "@angular/core";
import {AbstractValueAccessor, MakeProvider} from "../AbstractValueAccessor";

@Component({
    selector: "app-input-password",
    templateUrl: "./custom-input-password.component.html",
    providers: [MakeProvider(CustomInputPasswordComponent)]
})
export class CustomInputPasswordComponent extends AbstractValueAccessor {

    @Input() id: string;
    @Input() label: string;
    @Input() isRequired = false;
    @Input() containerCssClass: string;
    @Input() icon: string;
    @Input() placeholder = "";
    @Input() iconDirection: "left" | "right" ;
    @Input() feedback = false;

    isInvalid(): boolean {
        return this.isRequired && this.value === "";
    }

}
