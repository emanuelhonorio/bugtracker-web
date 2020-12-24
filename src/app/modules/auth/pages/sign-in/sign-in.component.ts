import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public email: string;
  public password: string;

  public isSubmitting = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  async handleSignInSubmit() {
    try {
      this.isSubmitting = true;
      const user = await this.authService.signIn(this.email, this.password);
      this.router.navigateByUrl('/');
    } catch (err) {
      this.toastr.error(err?.error.error || 'Error, try again later');
    }

    this.isSubmitting = false;
  }

  async signInAsDemo() {
    try {
      this.isSubmitting = true;
      const user = await this.authService.signInAsDemo();
      this.router.navigateByUrl('/');
    } catch (err) {
      this.toastr.error(err?.error.error || 'Error, try again later');
    }

    this.isSubmitting = false;
  }
}
