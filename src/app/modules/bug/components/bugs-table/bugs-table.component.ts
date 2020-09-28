import { DateFormatterService } from './../../../../shared/services/date-formatter.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-bugs-table',
  templateUrl: './bugs-table.component.html',
  styleUrls: ['./bugs-table.component.scss'],
})
export class BugsTableComponent implements OnInit {
  @Output()
  public edit = new EventEmitter();
  @Output()
  public delete = new EventEmitter();

  @Input()
  public bugs: any[] = [];

  constructor(private dateFormatterService: DateFormatterService) {}

  ngOnInit(): void {}

  formatDateFromNow(date) {
    return this.dateFormatterService.formatDateFromNow(date);
  }
}
