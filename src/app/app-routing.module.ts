import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { FeedComponent } from './modules/feed/pages/feed/feed.component';
import { ProfileComponent } from './modules/user/pages/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CreateUserComponent } from './modules/user/pages/create-user/create-user.component';
import { ListUsersComponent } from './modules/user/pages/list-users/list-users.component';
import { ListProjectsComponent } from './modules/project/pages/list-projects/list-projects.component';
import { ListBugsComponent } from './modules/bug/pages/list-bugs/list-bugs.component';
import { CreateBugComponent } from './modules/bug/pages/create-bug/create-bug.component';
import { CreateProjectComponent } from './modules/project/pages/create-project/create-project.component';
import { SignInComponent } from './modules/auth/pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './modules/auth/pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects',
    component: ListProjectsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects/new',
    component: CreateProjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: ListUsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/new',
    component: CreateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bugs',
    component: ListBugsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bugs/new',
    component: CreateBugComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
