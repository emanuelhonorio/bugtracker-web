import { BehaviorSubject } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ProjectI {
  title: string;
  description: string;
  users?: any[];
}

export interface ProjectFilterI {
  title?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiURL = environment.baseApiURL;

  private selectedProjectBS = new BehaviorSubject<any>(null);
  public selectedProjectObs = this.selectedProjectBS.asObservable();

  constructor(private http: HttpClient) {}

  setSelectedProject(project) {
    this.selectedProjectBS.next(project);
  }

  getProjects(projectFilter: ProjectFilterI) {
    let params = new HttpParams();

    if (projectFilter?.title) {
      params = params.set('title', projectFilter.title);
    }

    return this.http.get(`${this.apiURL}/projects`, { params }).toPromise();
  }

  createProject(project) {
    return this.http.post(`${this.apiURL}/projects`, project).toPromise();
  }

  sendInvitesToProject(usersIds) {
    const selectedProjectId = this.selectedProjectBS.getValue()?.id;

    if (!selectedProjectId) {
      return Promise.reject('no project selected');
    }

    let body = {
      users: usersIds,
      project_id: selectedProjectId,
    };

    return this.http.post(`${this.apiURL}/invites`, body).toPromise();
  }

  listUsersFromProject() {
    const selectedProjectId = this.selectedProjectBS.getValue()?.id;

    if (!selectedProjectId) {
      return Promise.reject('no project selected');
    }
    return this.http
      .get(`${this.apiURL}/projects/${selectedProjectId}/members`)
      .toPromise();
  }

  deleteProject(projectId: number) {
    return this.http.delete(`${this.apiURL}/projects/${projectId}`).toPromise();
  }

  updateProject(project: any) {
    return this.http
      .put(`${this.apiURL}/projects/${project.id}`, project)
      .toPromise();
  }
}
