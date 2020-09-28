import { ProjectUpdateModelComponent } from './components/project-update-model/project-update-model.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';
import { ProjectsHeaderComponent } from './components/projects-header/projects-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateProjectComponent,
    ProjectsTableComponent,
    ListProjectsComponent,
    ProjectsHeaderComponent,
    ProjectUpdateModelComponent,
  ],
  entryComponents: [ProjectUpdateModelComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
})
export class ProjectModule {}
