import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  project: any = {};
  isSubmitting = false;

  title = "Create a new project";

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.handleFirstProject();
  }

  async handleFirstProject() {
    const projects = <any[]>await this.projectService.getProjects({});

    if (projects.length === 0) { // First Project
      this.title = "Looks like you don't have any Project"
      console.log(projects)
    }
  }

  async handleCreateProjectSubmit() {
    try {
      this.isSubmitting = true;
      await this.projectService.createProject(this.project);
      this.toastr.success('Project created');
      this.router.navigateByUrl('/projects');
    } catch (err) {
      this.toastr.error('Error while creating project');
    }
    this.isSubmitting = false;
  }
}
