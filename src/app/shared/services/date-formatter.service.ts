import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DateFormatterService {
  constructor() {}

  formatDateFromNow(date) {
    return moment(date).fromNow();
  }
}
