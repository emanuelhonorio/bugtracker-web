import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { UsersHeaderComponent } from './components/users-header/users-header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListUsersComponent,
    UsersHeaderComponent,
    UsersListComponent,
    CreateUserComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class UserModule {}
