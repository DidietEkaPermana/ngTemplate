import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemListComponent } from './item/itemlist.component';
import { ItemInputComponent } from './item/iteminput.component';
import { ItemViewComponent } from './item/itemview.component';
import { UserComponent } from './users/users.component';
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
    ItemListComponent,
    ItemInputComponent,
    ItemViewComponent,
    UserComponent
  ],
  providers: [
    UsersService
  ]
})
export class HomeModule { }
