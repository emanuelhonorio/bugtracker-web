import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private baseApiURL = environment.baseApiURL;

  constructor(private http: HttpClient) {}

  listNotifications() {
    return this.http.get(`${this.baseApiURL}/notifications`).toPromise();
  }

  listSent() {
    return this.http.get(`${this.baseApiURL}/invites/sent`).toPromise();
  }

  listReceived() {
    return this.http.get(`${this.baseApiURL}/invites/received`).toPromise();
  }

  accept(notificationId) {
    return this.http
      .post(`${this.baseApiURL}/invites/${notificationId}/accept`, {})
      .toPromise();
  }

  decline(notificationId) {
    return this.http
      .post(`${this.baseApiURL}/invites/${notificationId}/decline`, {})
      .toPromise();
  }
}
