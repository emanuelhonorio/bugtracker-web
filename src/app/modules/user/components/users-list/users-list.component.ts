import { Subscription } from 'rxjs';
import { ProjectService } from './../../../project/services/project.service';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  @Output()
  public delete = new EventEmitter();

  @Input()
  public users = [];

  private selectedProjectSubscription: Subscription;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.selectedProjectSubscription = this.projectService.selectedProjectObs.subscribe(
      (project) => {
        console.log(project);
        if (project?.id) this.projectService.listUsersFromProject();
      }
    );
  }

  ngOnDestroy() {
    this.selectedProjectSubscription.unsubscribe();
  }

  handleDelete(user) {
    this.delete.emit(user);
  }
}
