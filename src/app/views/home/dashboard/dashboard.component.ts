import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core'

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  constructor(
    private userService: UserService
   ) {
     
    }

}
