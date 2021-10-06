import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicFormComponent} from "./dynamic-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {InputsModule} from "../inputs/inputs.module";
import {MatButtonModule} from "@angular/material/button";

const components = [
  DynamicFormComponent,
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputsModule,
    MatButtonModule
  ],
  exports: [
    components
  ]
})
export class DynamicFormModule { }
