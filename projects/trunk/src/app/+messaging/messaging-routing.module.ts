import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageTableComponent} from "./inbox-message/message-table.component";

const routes: Routes = [
  {
    path: '',
    component: MessageTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagingRoutingModule { }
