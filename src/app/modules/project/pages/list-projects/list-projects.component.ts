import { ProjectUpdateModelComponent } from './../../components/project-update-model/project-update-model.component';
import { ConfirmComponent } from './../../../../shared/components/confirm/confirm.component';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SimpleModalService } from 'ngx-simple-modal';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss'],
})
export class ListProjectsComponent implements OnInit {
  public projects = [];

  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService,
    private simpleModalService: SimpleModalService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.projects = <any[]>await this.projectService.getProjects({});
  }

  async onSearchTitle(title) {
    this.projects = <any[]>await this.projectService.getProjects({ title });
  }

  handleEdit(project) {
    this.simpleModalService
      .addModal(ProjectUpdateModelComponent, {
        project: { ...project },
      })
      .subscribe(async (project) => {
        if (project) {
          await this.editProject(project);
          this.init();
        }
      });
  }

  async editProject(project) {
    try {
      await this.projectService.updateProject(project);
      this.toastr.success('project updated');
    } catch (err) {
      this.toastr.error(err?.error.error || 'error while updating project');
    }
  }

  async handleDelete(project) {
    this.simpleModalService
      .addModal(ConfirmComponent, {
        title: 'Delete Project',
        message: `Você quer realmente deletar Project "${project.title}" ?`,
      })
      .subscribe(async (isConfirmed) => {
        //We get modal result
        if (isConfirmed) {
          await this.deleteProject(project.id);
          this.init();
        }
      });
  }

  async deleteProject(id) {
    console.log('deleting bug');
    try {
      await this.projectService.deleteProject(id);
      this.toastr.success('bug deleted');
    } catch (err) {
      this.toastr.error(err?.error?.error || 'error while deleting bug');
    }
  }
}
