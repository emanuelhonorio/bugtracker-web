import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bugs-header',
  templateUrl: './bugs-header.component.html',
  styleUrls: ['./bugs-header.component.scss'],
})
export class BugsHeaderComponent implements OnInit {
  @Output()
  filter = new EventEmitter();

  public title: string = '';
  public status: string = '';
  public severity: string = '';

  constructor() {}

  ngOnInit(): void {}

  onFilter() {
    const { title, status, severity } = this;
    this.filter.emit({ title, status, severity });
  }
}
