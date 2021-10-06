import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmtExpandCardComponent } from './pmt-expand-card.component';
import {MatCardModule} from "@angular/material/card";
import {MaximizeModule} from "../../layouts/shared/component/maximize/maximize.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    PmtExpandCardComponent
  ],
  exports: [
    PmtExpandCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MaximizeModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PmtExpandCardModule { }
