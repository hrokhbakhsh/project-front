import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TranslateModule} from "@ngx-translate/core";
import {PmtInputComponent} from "./pmt-input/pmt-input.component";
import { PmtDateComponent } from './pmt-date/pmt-date.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { PmtListComponent } from './pmt-list/pmt-list.component';
import {MatSelectModule} from "@angular/material/select";
import { PmtRadioComponent } from './pmt-radio/pmt-radio.component';
import {MatRadioModule} from "@angular/material/radio";
import { PmtAutocompleteListComponent } from './pmt-autocomplete-list/pmt-autocomplete-list.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PmtCheckboxComponent } from './pmt-checkbox/pmt-checkbox.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { PmtTextareaComponent } from './pmt-textarea/pmt-textarea.component';
import {PmtMultiInputsComponent} from "./pmt-multi-inputs/inputs.component";
import {MatButtonModule} from "@angular/material/button";
import {PmtButtonsModule} from "../pmt-buttons/pmt-buttons.module";
import {MatIconModule} from "@angular/material/icon";


const components = [
  PmtInputComponent,
  PmtDateComponent,
  PmtListComponent,
  PmtRadioComponent,
  PmtAutocompleteListComponent,
  PmtCheckboxComponent,
  PmtMultiInputsComponent,
  PmtTextareaComponent

]

@NgModule({
    declarations: [
        components,
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    PmtButtonsModule,
    MatIconModule
  ],
    exports: [
        components


    ]
})
export class InputsModule { }
