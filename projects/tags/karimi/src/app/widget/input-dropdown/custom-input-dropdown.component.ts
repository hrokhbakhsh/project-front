import {Component, Input} from "@angular/core";
import {AbstractValueAccessor, MakeProvider} from "../AbstractValueAccessor";
import {SelectItem} from "primeng/api";

@Component({
    selector: "app-input-dropdown",
    templateUrl: "./custom-input-dropdown.component.html",
    providers: [MakeProvider(CustomInputDropdownComponent)]
})
export class CustomInputDropdownComponent extends AbstractValueAccessor {

    @Input() id: string;
    @Input() label: string;
    @Input() isRequired = false;
    @Input() containerCssClass: string;
    @Input() options: any[];
    @Input() optionLabel = "label";

    isInvalid(): boolean {
        return this.isRequired && this.value === null;
    }

}
