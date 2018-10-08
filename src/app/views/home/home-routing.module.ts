import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AuthGuard } from '../../core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemListComponent } from './item/itemlist.component';
import { ItemInputComponent } from './item/iteminput.component';
import { ItemViewComponent } from './item/itemview.component';
import { UserComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'itemlist',
    component: ItemListComponent,
    data: {
      title: 'Item List'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'iteminput',
    component: ItemInputComponent,
    data: {
      title: 'Item Input'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'itemview',
    component: ItemViewComponent,
    data: {
      title: 'Item View'
    },
    canActivate: [AuthGuard]
  },
  {
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
