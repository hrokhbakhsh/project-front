import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CustomComponentComponent} from "./custom-component/custom-component.component";
import {DynamicComponentComponent} from "./dynamic-component/dynamic-component.component";
import {MypageComponent} from "./mypage/mypage.component";
import {ProductGroupComponentComponent} from "./product-group-component/product-group-component.component";
import {IconsComponent} from "./icons/icons.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: "custom-component", component: CustomComponentComponent},
            {path: "dynamic-component", component: DynamicComponentComponent},
            {path: "mypage", component: MypageComponent},
            {path: "product-group", component: ProductGroupComponentComponent},
            {path: "icons", component: IconsComponent},
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ExampleRoutingModule {
}
