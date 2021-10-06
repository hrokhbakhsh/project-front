import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaximizeDirective } from './maximize.directive';



@NgModule({
  declarations: [
    MaximizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [MaximizeDirective]
})
export class MaximizeModule { }
