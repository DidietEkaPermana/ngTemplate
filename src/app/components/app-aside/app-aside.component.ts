import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAsideComponent {

  constructor(
    private router: Router,
    private userService: UserService
    ) { }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/login');
  }
}
