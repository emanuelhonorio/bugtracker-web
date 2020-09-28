import { environment } from './../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseApiURL = environment.baseApiURL;

  constructor(private http: HttpClient) {}

  findByEmail(email) {
    const params = new HttpParams().set('email', email);
    return this.http.get(`${this.baseApiURL}/users`, { params }).toPromise();
  }

  async removeMember(projectId: number, memberId: number) {
    return this.http
      .delete(`${this.baseApiURL}/projects/${projectId}/members/${memberId}`)
      .toPromise();
  }
}
