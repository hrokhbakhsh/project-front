import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MessagingRoutingModule} from './messaging-routing.module';
import {MessageTableComponent} from './inbox-message/message-table.component';
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
import {MatNativeDateModule} from "@angular/material/core";
import {NgPersianDatepickerModule} from "ng-persian-datepicker";


@NgModule({
  declarations: [
    MessageTableComponent
  ],
  imports: [
    CommonModule,
    MessagingRoutingModule,
    MatButtonModule,
    SharedModule,
    PmtExpandCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    NgPersianDatepickerModule
  ]
})
export class MessagingModule {
}
