import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public user = { name: '', email: '', password: '' };
  public isSubmitting = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  async handleSignUp() {
    this.isSubmitting = true;
    try {
      await this.authService.signUp(this.user);
      this.toastr.success('Account created sucessfully');
      this.router.navigateByUrl('/signin');
    } catch (err) {
      this.toastr.error(err?.error.error || 'Error, try again later');
    }
    this.isSubmitting = false;
  }
}
