import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss'],
})
export class ProjectsTableComponent implements OnInit {
  @Output()
  public edit = new EventEmitter();
  @Output()
  public delete = new EventEmitter();

  @Input()
  public projects = [];

  constructor() {}

  ngOnInit(): void {}
}
