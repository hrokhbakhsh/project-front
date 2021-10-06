import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";

@Component({
  selector: 'pmt-checkbox',
  templateUrl: './pmt-checkbox.component.html',
  styleUrls: ['./pmt-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PmtCheckboxComponent
    }
    ,
    {
      provide: NG_VALIDATORS,
      useExisting: PmtCheckboxComponent,
      multi: true,
    }
  ]
})
export class PmtCheckboxComponent implements OnInit ,ControlValueAccessor, Validator {

  value: any | undefined;
  @Input() label: string = "";

  control: AbstractControl | undefined;

  change: any = () => {
  }

  _onTouched: any = () => {
  };

  public onChange(event: Event): void {
    const value: any = (<HTMLInputElement>event.target).checked;
    this.change(value);
  }
  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }


  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }


  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  writeValue(obj: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj);
  }

  registerOnValidatorChange(fn: () => void): void {
  }


  validate(control: AbstractControl): ValidationErrors | null {
    this.control = control;
    return (!this.value) ? null : {
      jsonParseError: {
        valid: false,
      },
    };
  }

}
