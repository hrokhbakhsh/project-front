import {NgModule} from "@angular/core";
import {AppCodeModule} from "../../app.code.component";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {WidgetModule} from "../../widget/widget.module";
import {ButtonModule} from "primeng/button";
import {TranslateModule} from "@ngx-translate/core";
import {CheckboxModule} from "primeng/checkbox";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";

@NgModule({
    imports: [
        LoginRoutingModule,
        AppCodeModule,
        WidgetModule,
        ButtonModule,
        CheckboxModule,
        MessageModule,
        TranslateModule,
        MessagesModule,
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {
}
