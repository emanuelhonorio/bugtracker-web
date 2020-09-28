import { SimpleModalModule } from 'ngx-simple-modal';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { NotificationModule } from './../modules/notification/notification.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppTemplateComponent } from './components/app-template/app-template.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppTemplateComponent,
    NavbarComponent,
    SidebarComponent,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NotificationModule,
    SimpleModalModule,
  ],
  entryComponents: [ConfirmComponent],
  exports: [
    AppTemplateComponent,
    NavbarComponent,
    SidebarComponent,
    ConfirmComponent,
  ],
})
export class SharedModule {}
