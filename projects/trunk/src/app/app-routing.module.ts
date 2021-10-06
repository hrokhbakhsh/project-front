import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {AuthorizationGuard} from "./core/gaurds/authorization.guard";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./+authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'panel',
    component: DefaultLayoutComponent,
    canActivate: [AuthorizationGuard],
    children:
      [
        {
          path: '',
          loadChildren: () => import('./+dashboard/dashboard.module').then(m => m.DashboardModule)
        },
        {
          path: 'profile',
          loadChildren: () => import('./+profile/profile.module').then(m => m.ProfileModule)
        },
        {
          path: 'inbox',
          loadChildren: () => import('./+inbox/inbox.module').then(m => m.InboxModule)
        },
        {
          path: 'customer-management',
          loadChildren: () => import('./pages/+customer-management/customer-management.module').then(m => m.CustomerManagementModule)
        },
        {
          path: 'grouping-person',
          loadChildren: () => import('./pages/+grouping-person/grouping-person.module').then(m => m.GroupingPersonModule)
        },
        {
          path: 'add-unit-teammate',
          loadChildren: () => import('./pages/+managing-unit-teammate/managing-unit-teammate.module').then(m => m.ManagingUnitTeammateModule)
        },
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
