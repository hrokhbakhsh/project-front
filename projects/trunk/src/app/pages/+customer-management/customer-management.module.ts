import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {PmtExpandCardModule} from "../../core/pmt-expand-card/pmt-expand-card.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedLibsModule} from "../../shared/shared-libs.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS} from "../../core/material.persian-date.adapter";
import {InboxService} from "../../+inbox/inbox.service";
import {MatButtonModule} from "@angular/material/button";
import { InputsModule } from "../../core/inputs/inputs.module";
import {MatSelectModule} from "@angular/material/select";
import {DefinitionRealPersonComponent} from "./real-person/definition-real-person/definition-real-person.component";
import { InquiryRealPersonComponent } from './real-person/inquery-real-person/inquiry-real-person.component';
import { DefinitionLegalPersonComponent } from './legal-person/definition-legal-person/definition-legal-person.component';
import { InqueryLegalPersonComponent } from './legal-person/inquery-legal-person/inquery-legal-person.component';
import {DynamicFormModule} from "../../core/dynamic-form/dynamic-form.module";
import {PmtCardModule} from "../../core/pmt-card/pmt-card.module";
import {PmtButtonsModule} from "../../core/pmt-buttons/pmt-buttons.module";


@NgModule({
  declarations: [
    DefinitionRealPersonComponent,
    InquiryRealPersonComponent,
    DefinitionLegalPersonComponent,
    InqueryLegalPersonComponent
  ],
  imports: [
    CommonModule,
    CustomerManagementRoutingModule,
    ReactiveFormsModule,
    PmtExpandCardModule,
    MatFormFieldModule,
    MatInputModule,
    SharedLibsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    InputsModule,
    MatSelectModule,
    DynamicFormModule,
    PmtCardModule,
    PmtButtonsModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
    InboxService
  ]
})
export class CustomerManagementModule { }
