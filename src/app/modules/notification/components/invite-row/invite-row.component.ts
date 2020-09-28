import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-invite-row',
  templateUrl: './invite-row.component.html',
  styleUrls: ['./invite-row.component.scss'],
})
export class InviteRowComponent implements OnInit {
  @Input()
  public invite: any = {};

  @Output()
  public answer = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleAccept(invite, accept) {
    this.answer.emit({ invite, accept });
  }

  formatDateFromNow(date) {
    return moment(date).fromNow();
  }
}
