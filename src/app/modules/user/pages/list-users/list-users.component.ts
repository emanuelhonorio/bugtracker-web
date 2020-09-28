import { UserService } from './../../services/user.service';
import { ConfirmComponent } from './../../../../shared/components/confirm/confirm.component';
import { SimpleModalService } from 'ngx-simple-modal';
import { ProjectService } from './../../../project/services/project.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit, OnDestroy {
  private selectedProjectSubscription: Subscription;
  private selectedProject: any = null;
  public users = [];

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private simpleModalService: SimpleModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.selectedProjectSubscription = this.projectService.selectedProjectObs.subscribe(
      (project) => {
        this.selectedProject = project;
        if (project) {
          this.loadUsers();
        } else {
          this.users = [];
        }
      }
    );
  }

  async loadUsers() {
    this.users = <any[]>await this.projectService.listUsersFromProject();
  }

  ngOnDestroy(): void {
    this.selectedProjectSubscription.unsubscribe();
  }

  onSearch(event) {
    console.log(event);
  }

  async onDelete(user) {
    //TODO: possible subscription without unsubscribe
    this.simpleModalService
      .addModal(ConfirmComponent, {
        title: 'Kick Member',
        message: `Você quer realmente excluir o membro "${user.name}" ?`,
      })
      .subscribe(async (isConfirmed) => {
        //We get modal result
        if (isConfirmed) {
          await this.deleteMember(user.id);
          this.loadUsers();
        }
      });
  }

  async deleteMember(id) {
    try {
      await this.userService.removeMember(this.selectedProject.id, id);
      this.toastr.success('member has been kicked');
    } catch (err) {
      this.toastr.error(err?.error.error || 'error while kicking member');
    }
  }
}
