import {Component, Input} from "@angular/core";
import {AbstractValueAccessor, MakeProvider} from "../AbstractValueAccessor";

@Component({
    selector: "app-input-number",
    templateUrl: "./custom-input-number.component.html",
    providers: [MakeProvider(CustomInputNumberComponent)]
})
export class CustomInputNumberComponent extends AbstractValueAccessor {

    @Input() id: string;
    @Input() label: string;
    @Input() isRequired = false;
    @Input() containerCssClass: string;
    @Input() mode: string;
    @Input() minFractionDigits = 2;
    @Input() maxFractionDigits = 5;

    isInvalid(): boolean {
        return this.isRequired && this.value === null;
    }

}
