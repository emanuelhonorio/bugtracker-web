import { ProjectService } from './../../../modules/project/services/project.service';
import { AuthService } from './../../../modules/auth/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  projects: any[] = [{}];
  selectedProject: any = null;
  selectedProjectSubscription: Subscription;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.selectedProjectSubscription = this.projectService.selectedProjectObs.subscribe(
      (project) => {
        this.selectedProject = project;
      }
    );

    this.initProjects();
  }
  ngOnDestroy(): void {
    this.selectedProjectSubscription.unsubscribe();
    this.projectService.setSelectedProject(null);
  }

  async initProjects() {
    try {
      this.projects = <any[]>await this.projectService.getProjects({});
    } catch (err) {
      this.projects = [];
    }
  }

  onSelectProject(event) {
    const projectId = +event.target.value;
    const [project] = this.projects.filter((el) => el.id === projectId);
    this.projectService.setSelectedProject(project || null);
  }

  onClickRefresh() {
    this.initProjects();
  }
}
