import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IList} from "../inputs/IList";

interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength: boolean;
  pattern?: string;
  nullValidators?: boolean;
}

interface JsonFormControlOptions {
  min?: number;
  max?: number;
  required?: boolean;
  step?: string;
  icon?: string
}

interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  class: string;
  multi?: boolean
  data?: IList[];
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
}

export interface JsonFormData {
  controls: JsonFormControls;
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() jsonFormData: JsonFormData | any;


  public myForm: FormGroup = this._fb.group({})

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.jsonFormData.firstChange) {
      this.createForm(this.jsonFormData.controls)
    }
  }
  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      /*     this.myForm.addControl(control.name, this._fb.control(''))*/
      for (const control of controls){
        const validatorToAdd = [];
        for ( const [key , value ] of Object.entries(control.validators)){
          switch (key) {
            case 'min':
              validatorToAdd.push(Validators.min(value));
              break;
            case 'max':
              validatorToAdd.push(Validators.max(value));
              break;
            case 'required':
              if (value){
                validatorToAdd.push(Validators.required)
              }
              break;
            case 'requiredTrue':
              if (value){
                validatorToAdd.push(Validators.requiredTrue);
              }
              break;
            case 'email' :
              if (value){
                validatorToAdd.push(Validators.email);
              }
              break;
            case 'minLength':
              validatorToAdd.push(Validators.minLength(value))
              break;
            case 'maxLength':
              validatorToAdd.push(Validators.maxLength(value));
              break;
            case 'pattern':
              validatorToAdd.push(Validators.pattern(value));
              break;
            case 'nullValidators':
              validatorToAdd.push(Validators.nullValidator);
              break;
            default:
              break;
          }
        }
        if (control.multi){
          this.myForm.addControl(control.name, this._fb.array(['']))
        }
        else {
          this.myForm.addControl(
            control.name,
            this._fb.control(control.value , validatorToAdd))
        }
      }
    }
  }
  ngSubmit(){
    console.log(this.myForm.value)
  }
}

