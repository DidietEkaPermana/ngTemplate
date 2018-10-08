import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Errors } from '../../../core';
import { UsersService } from './users.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  isSubmitting = false;
  errors: Errors = {errors: {}};
  dataList: {};
  page: 1;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getData();  
  }

  getData(){
    this.isSubmitting = true;
    const filter = '';

    this.usersService
    .get(this.page, filter)
    .subscribe(
      data => {
        this.dataList = data;
        this.isSubmitting = false;
      },
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  btAdd(){
    this.usersService.changeMessage("0");
    this.router.navigate(['/home/userDetail']);
  }

  btEdit(arg){
    this.usersService.changeMessage(arg);
    this.router.navigate(['/home/userDetail']);
  }

  btDelete(arg){
    if(confirm("Are you sure you want to delete?")){
      this.isSubmitting = true;
      
      this.usersService
      .delete(arg)
      .subscribe(
        data => {
          this.getData();
        },
        err => {
          this.errors = err;
        }
      );

    }
  }
}
