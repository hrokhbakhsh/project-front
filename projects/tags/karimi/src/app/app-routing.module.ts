import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {Authority} from "./common/auth/authority.constants";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: "", component: HomeComponent},
            {path: "login", loadChildren: () => import("./components/login/login.module").then(m => m.LoginModule)},
            {
                path: "user-management",
                data: {
                    authorities: [Authority.ADMIN],
                },
                loadChildren: () => import("./components/user-management/user-management.module").then(m => m.UserManagementModule)
            },
            {path: "example", loadChildren: () => import("./components/examples/example.module").then(m => m.ExampleModule)},
        ], {scrollPositionRestoration: "enabled"})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
