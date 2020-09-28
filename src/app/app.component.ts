import { AuthService } from './modules/auth/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public user: any = {};
  private $userObs: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    if (this.$userObs) {
      this.$userObs.unsubscribe();
    }
  }

  async init() {
    if (this.authService.isLoggedIn()) {
      try {
        await this.authService.initContext();
      } catch (err) {
        this.authService.logout();
        this.router.navigateByUrl('/signin');
      }
    }
    this.$userObs = this.authService.userObservable.subscribe((user) => {
      this.user = user;
    });
  }
}
