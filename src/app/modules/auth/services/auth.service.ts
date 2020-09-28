import { environment } from 'src/environments/environment';
import { ProjectService } from './../../project/services/project.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private LSTokenKey = environment.LSTokenKey;
  private jwtHelper = new JwtHelperService();
  private baseApiURL = environment.baseApiURL;

  // auth context - current authenticated user
  private userBS = new BehaviorSubject<any>({});
  public userObservable = this.userBS.asObservable();

  constructor(
    private http: HttpClient,
    private projectService: ProjectService
  ) {}

  isLoggedIn() {
    try {
      const jwtToken = this.getAccessToken();
      return !!jwtToken && !this.jwtHelper.isTokenExpired(jwtToken);
    } catch (err) {
      return false;
    }
  }

  signIn(email: string, password: string) {
    // POST /signin
    // Put token in local storage
    // Update auth context
    // return response
    return this.http
      .post(`${this.baseApiURL}/signin`, { email, password })
      .toPromise()
      .then((response: any) => {
        localStorage.setItem(this.LSTokenKey, response.access_token);
        this.userBS.next(response.user);
        return response;
      });
  }

  logout(): void {
    localStorage.removeItem(this.LSTokenKey);
    this.userBS.next({});
    this.projectService.setSelectedProject(null);
  }

  signUp(user) {
    return this.http.post(`${this.baseApiURL}/signup`, user).toPromise();
  }

  async initContext() {
    try {
      const { user }: any = await this.getMe();
      this.userBS.next(user);
      return Promise.resolve(user);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  getMe() {
    return this.http
      .get(`${this.baseApiURL}/profile`)
      .toPromise()
      .then((response: any) => {
        this.userBS.next(response.user);
        return response;
      });
  }

  updateMe(name, image_url) {
    const body: any = { name };
    if (image_url) {
      body.image_url = image_url;
    }
    return this.http
      .put(`${this.baseApiURL}/profile`, body)
      .toPromise()
      .then((response: any) => {
        this.userBS.next(response.user);
        return response;
      });
  }

  getAccessToken() {
    return localStorage.getItem(this.LSTokenKey);
  }
}
