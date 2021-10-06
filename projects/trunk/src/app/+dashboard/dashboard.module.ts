import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ChartsModule} from "ng2-charts";
import {PmtExpandCardModule} from "../core/pmt-expand-card/pmt-expand-card.module";
import {PmtFastReportBoxModule} from "../core/pmt-fast-report-box/pmt-fast-report-box.module";
import {PmtCardModule} from "../core/pmt-card/pmt-card.module";
import {PmtButtonsModule} from "../core/pmt-buttons/pmt-buttons.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ChartsModule,
    PmtExpandCardModule,
    PmtFastReportBoxModule,
    PmtCardModule,
    PmtButtonsModule
  ]
})
export class DashboardModule { }
