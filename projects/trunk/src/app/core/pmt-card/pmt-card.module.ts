import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmtCardComponent } from './pmt-card.component';



@NgModule({
  declarations: [
    PmtCardComponent
  ],
  exports: [
    PmtCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PmtCardModule { }
