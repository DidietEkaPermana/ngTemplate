import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AuthGuard } from '../../core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    canActivate: [AuthGuard]
  }, {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'Users List'
    },
    canActivate: [AuthGuard]
  }, {
    path: 'userDetail',
    component: UserDetailComponent,
    data: {
      title: 'User Detail'
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
