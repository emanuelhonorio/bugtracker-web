import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface ConfirmModel {
  bug: any;
}

@Component({
  selector: 'app-bug-update-model',
  templateUrl: './bug-update-model.component.html',
  styleUrls: ['./bug-update-model.component.scss'],
})
export class BugUpdateModelComponent
  extends SimpleModalComponent<ConfirmModel, any>
  implements ConfirmModel {
  bug: any;

  constructor() {
    super();
  }
  confirm() {
    this.result = this.bug;
    this.close();
  }
}
