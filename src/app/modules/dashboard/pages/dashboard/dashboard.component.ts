import { Subscription } from 'rxjs';
import { BugService } from './../../../bug/services/bug.service';
import { ProjectService } from './../../../project/services/project.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  selectedProject: any = null;
  selectedProjectSubscription: Subscription;

  public projects = [];
  public bugs = [];
  public members = [];

  constructor(
    private projectService: ProjectService,
    private bugService: BugService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.init();
    this.selectedProjectSubscription = this.projectService.selectedProjectObs.subscribe(
      (project) => {
        if (this.selectedProject !== project) {
          this.selectedProject = project;
          this.init();
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.selectedProjectSubscription) {
      this.selectedProjectSubscription.unsubscribe();
    }
  }

  async init() {
    try {
      this.projects = <any>await this.projectService.getProjects({});

      if (this.selectedProject?.id) {
        this.bugs = <any>(
          await this.bugService.getBugs(this.selectedProject.id, {})
        );

        this.members = <any>await this.projectService.listUsersFromProject();
      } else {
        this.bugs = [];
        this.members = [];
        this.toastr.error('no project selected');
      }
    } catch (err) {
      this.toastr.error(
        err?.error?.error || 'error while loading informations'
      );
    }
  }
}
