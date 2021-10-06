import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import {DefaultHeaderComponent} from "./default-layout/default-header/default-header.component";
import {DefaultFooterComponent} from "./default-layout/default-footer/default-footer.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MenuListItemComponent} from "./default-layout/menu-list-item/menu-list-item.component";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {MatChipsModule} from "@angular/material/chips";
import { FullScreenToggleButtonComponent } from './shared/component/full-screen-toggle-button/full-screen-toggle-button.component';
import { DropdownMessageListComponent } from './shared/component/dropdown-message-list/dropdown-message-list.component';
import { ChangeLanguageComponent } from './shared/component/change-language/change-language.component';
import { DropdownProfileMenuComponent } from './shared/component/dropdown-profile-menu/dropdown-profile-menu.component';
import { DefaultSidebarHeaderComponent } from './default-layout/default-sidebar-header/default-sidebar-header.component';
import { SidebarToggleComponent } from './default-layout/sidebar-toggle/sidebar-toggle.component';
import { SettingsDialogComponent } from './default-layout/settings-dialog/settings-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CarouselComponent} from "../core/carousel/carousel.component";



@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    MenuListItemComponent,
    FullScreenToggleButtonComponent,
    DropdownMessageListComponent,
    ChangeLanguageComponent,
    DropdownProfileMenuComponent,
    DefaultSidebarHeaderComponent,
    SidebarToggleComponent,
    SettingsDialogComponent,
CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatMenuModule,
    MatBadgeModule,
    MatChipsModule,
    MatDialogModule,


  ]
})
export class LayoutsModule { }
