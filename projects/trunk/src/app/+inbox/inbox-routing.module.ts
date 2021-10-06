import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InboxComponent} from "./inbox/inbox.component";

const routes: Routes = [
  {
    path: '',
    component: InboxComponent,
    data: { title: 'inbox-message.title-page'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
