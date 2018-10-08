import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AuthGuard } from '../../core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './users/users.component';

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
    component: UserComponent,
    data: {
      title: 'Users List'
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
