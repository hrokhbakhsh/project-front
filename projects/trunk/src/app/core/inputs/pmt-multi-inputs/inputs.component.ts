import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormArray, FormBuilder, FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors, Validator, Validators
} from "@angular/forms";

@Component({
  selector: 'pmt-input-multi',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class PmtMultiInputsComponent implements OnInit{


  @Input() parent: FormGroup | any ;
  @Input() label: string = "" ;
  @Input() formArrayName : string = ''

  constructor(private _fb: FormBuilder) {
  }

  get items(){
    return   this.parent.get(this.formArrayName) as  FormArray;
  }
  ngOnInit(): void {
  }

  addItems() {
    this.items.push(this._fb.control('' , [Validators.required]));
  }

  remove(i: number) {
    this.items.removeAt(i)
  }

  hasError(i: number){
    return (this.items.controls[i].errors && (this.items.controls[i].touched || this.items.controls[i].dirty));
  }
}
