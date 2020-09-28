import { AuthService } from './../../../auth/services/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public isSubmitting = false;
  private user: any = {};
  public userUpdating: any = { name: '', image_url: '' };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.initProfile();
  }

  async initProfile() {
    this.isSubmitting = true;
    try {
      this.user = (<any>await this.authService.getMe()).user;
      this.fillUserUpdating();
    } catch (err) {
      console.log(err);
    }
    this.isSubmitting = false;
  }

  async handleUpdateProfile() {
    this.isSubmitting = true;
    const { name, image_url } = this.userUpdating;

    try {
      this.user = (<any>await this.authService.updateMe(name, image_url)).user;
      this.fillUserUpdating();
    } catch (err) {
      console.log(err);
    }
    this.isSubmitting = false;
  }

  fillUserUpdating() {
    this.userUpdating = { ...this.user };
  }
}
