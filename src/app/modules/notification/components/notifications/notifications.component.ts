import { NotificationService } from './../../services/notification.service';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  public invites = [];
  public notifications = [];

  public isSubmittingSet = {
    'notification-id': false,
  };

  constructor(
    private notificationService: NotificationService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadNotifications();
    this.loadInvites();
  }

  async loadNotifications() {
    this.notifications = <any[]>(
      await this.notificationService.listNotifications()
    );
  }

  async loadInvites() {
    this.invites = <any[]>await this.notificationService.listReceived();
  }

  async handleAccept({ invite, accept }) {
    this.isSubmittingSet[invite.id] = true;
    try {
      if (accept) {
        await this.notificationService.accept(invite.id);
        this.toastr.success(
          'you accepted the invite for ' + invite?.project?.title
        );
      } else {
        await this.notificationService.decline(invite.id);
        this.toastr.success(
          'you declined the invite for ' + invite?.project?.title
        );
      }
    } catch (err) {
      this.toastr.error('error while accepting invite');
    }
    await this.loadInvites();
    this.isSubmittingSet[invite.id] = false;
  }
}
