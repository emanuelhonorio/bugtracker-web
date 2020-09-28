import { BugService } from './../../services/bug.service';
import { ProjectService } from './../../../project/services/project.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.scss'],
})
export class CreateBugComponent implements OnInit, OnDestroy {
  public bug: any = { severity: 'LOW' };
  public isSubmitting = false;

  private selectedProjectSubscription: Subscription;
  private selectedProject = null;

  constructor(
    private bugService: BugService,
    private projectService: ProjectService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.selectedProjectSubscription = this.projectService.selectedProjectObs.subscribe(
      (project) => {
        this.selectedProject = project;
      }
    );
  }

  ngOnDestroy() {
    this.selectedProjectSubscription.unsubscribe();
  }

  async handleCreateBug(event) {
    if (!this.selectedProject) {
      this.toastr.error('You must have a selected project');
      return;
    }

    this.isSubmitting = true;

    try {
      await this.bugService.createBug(this.selectedProject.id, this.bug);
      this.toastr.success('Bug created');

      this.router.navigateByUrl('/bugs');
    } catch (err) {
      this.toastr.error(err?.error?.error || 'error while creating bug');
    }

    this.isSubmitting = false;
  }
}
