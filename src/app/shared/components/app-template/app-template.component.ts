import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-template',
  templateUrl: './app-template.component.html',
  styleUrls: ['./app-template.component.scss'],
})
export class AppTemplateComponent implements OnInit {
  public isSidebarClosed: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
