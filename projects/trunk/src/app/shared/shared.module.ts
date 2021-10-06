import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http"
  ;
import {SharedLibsModule} from "./shared-libs.module";
import {BaseInterceptor} from "../core/interceptors/base.interceptor";
import {AuthorizationInterceptor} from "../core/interceptors/authorization.interceptor";
import {JalaliPipe} from "./pipes/jalali.pipe";
import {MaterialModule} from "./material.module";



@NgModule({
  declarations: [
    JalaliPipe
  ],
  exports: [
    SharedLibsModule,
    JalaliPipe
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }
  ]
})
export class SharedModule { }
