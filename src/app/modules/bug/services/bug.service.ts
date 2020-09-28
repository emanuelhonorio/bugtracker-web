import { environment } from './../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface BugFilterI {
  title?: string;
  status?: string;
  severity?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BugService {
  private baseApiURL = environment.baseApiURL;

  constructor(private http: HttpClient) {}

  getBugs(projectId: string, bugFilter: BugFilterI) {
    let params = new HttpParams();

    if (bugFilter.title) {
      params = params.set('title', bugFilter.title);
    }

    if (bugFilter.status) {
      params = params.set('status', bugFilter.status);
    }

    if (bugFilter.severity) {
      params = params.set('severity', bugFilter.severity);
    }

    return this.http
      .get(`${this.baseApiURL}/projects/${projectId}/bugs`, { params })
      .toPromise();
  }

  createBug(projectId, bug) {
    return this.http
      .post(`${this.baseApiURL}/projects/${projectId}/bugs`, bug)
      .toPromise();
  }
  deleteBug(bugId: number) {
    return this.http.delete(`${this.baseApiURL}/bugs/${bugId}`).toPromise();
  }

  updateBug(bug: any) {
    return this.http.put(`${this.baseApiURL}/bugs/${bug.id}`, bug).toPromise();
  }
}
