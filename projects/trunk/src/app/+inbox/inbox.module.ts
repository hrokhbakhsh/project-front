import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InboxRoutingModule} from './inbox-routing.module';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";
import {PmtExpandCardModule} from "../core/pmt-expand-card/pmt-expand-card.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {InboxComponent} from "./inbox/inbox.component";
import {InboxService} from "./inbox.service";
import {MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS} from "../core/material.persian-date.adapter";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSortModule} from "@angular/material/sort";
import {InputsModule} from "../core/inputs/inputs.module";
import {PmtButtonsModule} from "../core/pmt-buttons/pmt-buttons.module";
import {PmtCardModule} from "../core/pmt-card/pmt-card.module";


@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    SharedModule,
    InboxRoutingModule,
    MatButtonModule,
    PmtExpandCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSortModule,
    InputsModule,
    PmtButtonsModule,
    PmtCardModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
    InboxService
  ]
})
export class InboxModule {
}
