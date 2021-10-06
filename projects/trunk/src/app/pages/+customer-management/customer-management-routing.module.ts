import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefinitionRealPersonComponent } from "./real-person/definition-real-person/definition-real-person.component";
import {InquiryRealPersonComponent} from "./real-person/inquery-real-person/inquiry-real-person.component";
import {InqueryLegalPersonComponent} from "./legal-person/inquery-legal-person/inquery-legal-person.component";
import {DefinitionLegalPersonComponent} from "./legal-person/definition-legal-person/definition-legal-person.component";

const routes: Routes = [
  {
    path: 'definition-real-person',
    component: DefinitionRealPersonComponent,
    data: {title: 'pages.customer-management.real-person.define-real-person-Title'}

  },
  {
    path: 'inquiry-real-person',
    component: InquiryRealPersonComponent,
    data: {title: 'pages.customer-management.real-person.inquiry-real-person-Title'}

  },
  {
    path: 'definition-legal-person',
    component: DefinitionLegalPersonComponent,
    data: {title: 'pages.customer-management.legal-person.definition-legal-person.definition-legal-person-title'}

  },
  {
    path: 'inquiry-legal-person',
    component: InqueryLegalPersonComponent,
    data: {title: 'pages.customer-management.legal-person.inquiry-legal-person.Inquiry-legal-person'}

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
