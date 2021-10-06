import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmtFastReportBoxComponent } from './pmt-fast-report-box.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {SharedLibModule} from "../shared-lib/shared-lib.module";



@NgModule({
  declarations: [
    PmtFastReportBoxComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    SharedLibModule
  ],
  exports: [
    PmtFastReportBoxComponent
  ]
})
export class PmtFastReportBoxModule { }
