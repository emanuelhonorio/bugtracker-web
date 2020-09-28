import { Component, OnInit } from '@angular/core';

import { SimpleModalComponent } from 'ngx-simple-modal';

export interface ConfirmModel {
  project: any;
}

@Component({
  selector: 'app-project-update-model',
  templateUrl: './project-update-model.component.html',
  styleUrls: ['./project-update-model.component.scss'],
})
export class ProjectUpdateModelComponent
  extends SimpleModalComponent<ConfirmModel, any>
  implements ConfirmModel {
  project: any;

  constructor() {
    super();
  }
  confirm() {
    this.result = this.project;
    this.close();
  }
}
