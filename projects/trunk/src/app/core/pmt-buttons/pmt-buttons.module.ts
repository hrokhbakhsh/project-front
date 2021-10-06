import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmtButtonComponent } from './pmt-button/pmt-button.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SharedLibModule} from "../shared-lib/shared-lib.module";



@NgModule({
  declarations: [
    PmtButtonComponent
  ],
  exports: [
    PmtButtonComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        SharedLibModule
    ]
})
export class PmtButtonsModule { }
