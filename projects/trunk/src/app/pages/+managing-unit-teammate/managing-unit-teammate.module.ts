import { NgModule } from '@angular/core';
import { AddUnitTeammateComponent } from './DefineTeammateUnit/add-unit-teammate/add-unit-teammate.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputsModule} from "../../core/inputs/inputs.module";
import {SharedLibsModule} from "../../shared/shared-libs.module";
import {SharedModule} from "../../shared/shared.module";
import {ManagingUnitRoutingModule} from "./managing-unit-routing.module";
import { TeammateUnitListComponent } from './DefineTeammateUnit/teammate-unit-list/teammate-unit-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {PmtCardModule} from "../../core/pmt-card/pmt-card.module";
import {PmtButtonsModule} from "../../core/pmt-buttons/pmt-buttons.module";



@NgModule({
  declarations: [
    AddUnitTeammateComponent,
    TeammateUnitListComponent

  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InputsModule,
    SharedLibsModule,
    ManagingUnitRoutingModule,
    MatTableModule,
    MatIconModule,
    PmtCardModule,
    PmtButtonsModule
  ]
})
export class ManagingUnitTeammateModule { }
