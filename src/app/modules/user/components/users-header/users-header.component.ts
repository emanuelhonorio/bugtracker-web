import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.scss'],
})
export class UsersHeaderComponent implements OnInit {
  @Output()
  public search = new EventEmitter();

  public name = '';

  constructor() {}

  ngOnInit(): void {}

  onInput() {
    this.search.emit(this.name);
  }
}
