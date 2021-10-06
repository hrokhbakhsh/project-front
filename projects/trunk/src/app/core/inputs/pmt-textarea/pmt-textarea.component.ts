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
  selector: 'pmt-textarea',
  templateUrl: './pmt-textarea.component.html',
  styleUrls: ['./pmt-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PmtTextareaComponent
    }
    ,
    {
      provide: NG_VALIDATORS,
      useExisting: PmtTextareaComponent,
      multi: true,
    }
  ]

})
export class PmtTextareaComponent implements OnInit ,  ControlValueAccessor, Validator {


  value: string | undefined;
  @Input() label: string = "";


  control: AbstractControl | undefined;

  change: any = () => {
  }

  _onTouched: any = () => {
  };
  public onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
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
