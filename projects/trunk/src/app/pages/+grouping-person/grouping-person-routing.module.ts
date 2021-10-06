import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupingPersonComponent} from "./grouping-person/grouping-person.component";
import {ShowPeopleComponent} from "./show-people/show-people.component";


const routes: Routes = [
  {
    path: 'groupingPerson',
    component: GroupingPersonComponent,
    data: {title: 'pages.grouping-person.grouping-person.grouping-personTitle'}

  },
  {
    path: 'show-people',
    component: ShowPeopleComponent,
    data: {title: 'pages.unit-teammate.define-teammate-unit.list-teammate.list-teammate-unit-title'}

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupingPersonRoutingModule { }
