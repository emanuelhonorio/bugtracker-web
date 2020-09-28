import { ProjectService } from './../../../project/services/project.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  public email = '';
  public user = null;

  public isSubmitting = false;

  constructor(
    private userService: UserService,
    private projetService: ProjectService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  async onSearch(form) {
    if (form.valid) {
      this.user = <any[]>await this.userService.findByEmail(this.email);
    } else {
      this.user = null;
    }
  }

  async onAddUser(user) {
    this.isSubmitting = true;
    try {
      await this.projetService.sendInvitesToProject([user.id]);
      this.toastr.success('Invite sent to ' + user?.name);
    } catch (err) {
      this.toastr.error(err?.error?.error || err);
    }
    this.isSubmitting = false;
  }
}
