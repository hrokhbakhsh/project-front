import { NgModule } from '@angular/core';
import { GroupingPersonComponent } from './grouping-person/grouping-person.component';
import {TranslateModule} from "@ngx-translate/core";
import {InputsModule} from "../../core/inputs/inputs.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {GroupingPersonRoutingModule} from "./grouping-person-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import { ShowPeopleComponent } from './show-people/show-people.component';
import {DynamicFormModule} from "../../core/dynamic-form/dynamic-form.module";
import {SharedLibModule} from "../../core/shared-lib/shared-lib.module";
import {PmtCardModule} from "../../core/pmt-card/pmt-card.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    GroupingPersonComponent,
    ShowPeopleComponent
  ],
  imports: [
    SharedModule,
    TranslateModule,
    InputsModule,
    ReactiveFormsModule,
    GroupingPersonRoutingModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    DynamicFormModule,
    SharedLibModule,
    PmtCardModule,
    MatButtonModule
  ]
})
export class GroupingPersonModule { }
