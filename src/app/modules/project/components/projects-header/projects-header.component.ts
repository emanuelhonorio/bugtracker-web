import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projects-header',
  templateUrl: './projects-header.component.html',
  styleUrls: ['./projects-header.component.scss'],
})
export class ProjectsHeaderComponent implements OnInit {
  @Output()
  public search = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSearchName(name) {
    this.search.emit(name);
  }
}
