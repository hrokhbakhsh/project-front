import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddUnitTeammateComponent} from "./DefineTeammateUnit/add-unit-teammate/add-unit-teammate.component";
import {TeammateUnitListComponent} from "./DefineTeammateUnit/teammate-unit-list/teammate-unit-list.component";


const routes: Routes = [
  {
    path: 'addunit',
    component: AddUnitTeammateComponent,
    data: {title: 'pages.unit-teammate.define-teammate-unit.add-teammate.add-teammate-unit-title'}

  },
  {
    path: 'teamunit',
    component: TeammateUnitListComponent,
    data: {title: 'pages.unit-teammate.define-teammate-unit.list-teammate.list-teammate-unit-title'}

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagingUnitRoutingModule {
}
