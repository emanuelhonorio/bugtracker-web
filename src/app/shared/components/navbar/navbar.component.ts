import { AuthService } from './../../../modules/auth/services/auth.service';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  public user: any = {};

  @Output()
  toggle = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.userObservable.subscribe(
      (user: any) => {
        this.user = user;
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onToggle() {
    this.toggle.emit();
  }

  handleProfile() {
    this.router.navigateByUrl('/profile');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/signin');
  }
}
