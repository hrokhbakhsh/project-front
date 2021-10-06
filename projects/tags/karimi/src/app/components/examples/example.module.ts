import {NgModule} from "@angular/core";
import {CustomComponentComponent} from "./custom-component/custom-component.component";
import {ProductGroupComponentComponent} from "./product-group-component/product-group-component.component";
import {MypageComponent} from "./mypage/mypage.component";
import {DynamicComponentComponent} from "./dynamic-component/dynamic-component.component";
import {ExampleRoutingModule} from "./example-routing.module";
import {OrderListModule} from "primeng/orderlist";
import {ChartModule} from "primeng/chart";
import {MypageDetailsDialogComponent} from "./mypage/mypage-details.dialog.component";
import {MypageDialogComponent} from "./mypage/mypage.dialog.component";
import {IconsComponent} from "./icons/icons.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        ExampleRoutingModule,
        OrderListModule,
        ChartModule,
    ],
    declarations: [
        CustomComponentComponent,
        DynamicComponentComponent,
        MypageComponent,
        MypageDetailsDialogComponent,
        MypageDialogComponent,
        ProductGroupComponentComponent,
        IconsComponent
    ],
    exports: [
    ]
})
export class ExampleModule {
}
