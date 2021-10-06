import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from './placeholder.directive';
import {AddClassListDirective} from "./add-class-list.directive";

const directives = [
  PlaceholderDirective,
  AddClassListDirective
]
@NgModule({
  declarations: [
    directives
  ],
  imports: [
    CommonModule
  ],
  exports: [
    directives
  ]
})
export class SharedLibModule { }
