import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl, NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";
import {IList} from "../IList";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'pmt-autocomplete-list',
  templateUrl: './pmt-autocomplete-list.component.html',
  styleUrls: ['./pmt-autocomplete-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PmtAutocompleteListComponent
    }
    ,
    {
      provide: NG_VALIDATORS,
      useExisting: PmtAutocompleteListComponent,
      multi: true,
    }
  ]
})
export class PmtAutocompleteListComponent implements OnInit ,  ControlValueAccessor, Validator  {



  myControl = new FormControl();


  ngOnInit(): void {

  }



  @Input()
  options: IList[] = [];


  value: string | undefined;
  @Input()
  label: string = "";


  control: AbstractControl | undefined;

  change: any = () => {
  }

  _onTouched: any = () => {
  };
public onChange(event: any): void {
  const value: string = (<HTMLInputElement>event.target).value;
  this.change(value);
  console.log(value);
}


  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
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


  tests() {
    console.log(this.myControl);
  }
}


