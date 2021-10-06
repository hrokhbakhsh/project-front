import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";
import {IList} from "../IList";

@Component({
  selector: 'pmt-radio',
  templateUrl: './pmt-radio.component.html',
  styleUrls: ['./pmt-radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PmtRadioComponent
    }
    ,
    {
      provide: NG_VALIDATORS,
      useExisting: PmtRadioComponent,
      multi: true,
    }
  ]
})
export class PmtRadioComponent implements OnInit, ControlValueAccessor, Validator {
  @Input()
  options: IList[] = [];

  value: any | undefined;

  @Input()
  label: string = "";


  control: AbstractControl | undefined;

  change: any = () => {
  }

  _onTouched: any = () => {
  };
  public onChange(event: Event): void {
    const value: any = event;
    this.change(value);
    console.log(value);
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
