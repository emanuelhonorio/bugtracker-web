import { NotificationRowComponent } from './components/notification-row/notification-row.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { InviteRowComponent } from './components/invite-row/invite-row.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NotificationsComponent,
    InviteRowComponent,
    NotificationRowComponent,
  ],
  imports: [CommonModule],
  exports: [NotificationsComponent],
})
export class NotificationModule {}
