import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbstractValueAccessor, MakeProvider} from "../AbstractValueAccessor";

@Component({
    selector: "app-input-autocomplete",
    templateUrl: "./autocomplete.component.html",
    providers: [MakeProvider(AutocompleteComponent)]
})
export class AutocompleteComponent extends AbstractValueAccessor {

    @Input() id: string;
    @Input() label: string;
    @Input() isRequired = false;
    @Input() containerCssClass: string;
    @Input() suggestions: any[];
    @Input() field: string;
    @Output() completeMethod = new EventEmitter<void>() ;

    completeMethodEvent(event: any): void {
        this.completeMethod.emit(event);
    }

    isInvalid(): boolean {
        return this.isRequired && this.value === "";
    }

}
