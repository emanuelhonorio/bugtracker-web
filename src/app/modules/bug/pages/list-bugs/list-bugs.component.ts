import { BugUpdateModelComponent } from './../../components/bug-update-model/bug-update-model.component';
import { ConfirmComponent } from './../../../../shared/components/confirm/confirm.component';
import { ProjectService } from './../../../project/services/project.service';
import { BugService } from './../../services/bug.service';
import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-bugs',
  templateUrl: './list-bugs.component.html',
  styleUrls: ['./list-bugs.component.scss'],
})
export class ListBugsComponent implements OnInit {
  public bugs = [];
  private projectId = null;

  constructor(
    private bugService: BugService,
    private projectService: ProjectService,
    private simpleModalService: SimpleModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.projectService.selectedProjectObs.subscribe((project) => {
      this.projectId = project?.id;
      this.getBugs();
    });
  }

  async getBugs() {
    if (!this.projectId) {
      this.bugs = [];
      return;
    }
    try {
      this.bugs = <any[]>await this.bugService.getBugs(this.projectId, {});
    } catch (err) {
      console.log(err);
    }
  }

  async onFilter({ title, status, severity }) {
    console.log({ title, status, severity });
    try {
      this.bugs = <any[]>await this.bugService.getBugs(this.projectId, {
        title,
        status,
        severity,
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleEdit(bug) {
    this.simpleModalService
      .addModal(BugUpdateModelComponent, {
        bug: { ...bug },
      })
      .subscribe(async (bug) => {
        if (bug) {
          await this.updateBug(bug);
          this.getBugs();
        }
      });
  }

  async updateBug(bug) {
    try {
      await this.bugService.updateBug(bug);
      this.toastr.success('bug updated');
    } catch (err) {
      this.toastr.error(err?.error.error || 'error while updating bug');
    }
  }

  handleDelete(bug) {
    //TODO: possible subscription without unsubscribe
    this.simpleModalService
      .addModal(ConfirmComponent, {
        title: 'Delete Bug',
        message: `Você quer realmente deletar Bug "${bug.title}" ?`,
      })
      .subscribe(async (isConfirmed) => {
        //We get modal result
        if (isConfirmed) {
          await this.deleteBug(bug.id);
          this.getBugs();
        }
      });
  }
  async deleteBug(id) {
    console.log('deleting bug');
    try {
      await this.bugService.deleteBug(id);
      this.toastr.success('bug deleted');
    } catch (err) {
      this.toastr.error(err?.error.error || 'error while deleting bug');
    }
  }
}
