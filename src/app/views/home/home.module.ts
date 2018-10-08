import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';
import { UsersService } from './users/users.service';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    UserDetailComponent
  ],
  providers: [
    UsersService
  ]
})
export class HomeModule { }
