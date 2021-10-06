import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OrderListModule} from "primeng/orderlist";
import {TabViewModule} from "primeng/tabview";
import {AppCodeModule} from "../../app.code.component";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {WidgetModule} from "../../widget/widget.module";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        OrderListModule,
        TabViewModule,
        AppCodeModule,
        WidgetModule,

    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {
}
