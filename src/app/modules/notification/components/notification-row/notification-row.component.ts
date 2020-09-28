import { DateFormatterService } from './../../../../shared/services/date-formatter.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-row',
  templateUrl: './notification-row.component.html',
  styleUrls: ['./notification-row.component.scss'],
})
export class NotificationRowComponent implements OnInit {
  @Input()
  public notification;

  constructor(private dateFormatterService: DateFormatterService) {}

  ngOnInit() {}

  formatDate(date) {
    return this.dateFormatterService.formatDateFromNow(date);
  }
}
