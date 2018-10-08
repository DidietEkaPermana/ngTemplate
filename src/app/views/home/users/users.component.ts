import { Component, OnInit } from '@angular/core';

import { Errors } from '../../../core';
import { UsersService } from './users.service';

@Component({
  templateUrl: 'users.component.html'
})
export class UserComponent implements OnInit {
  isSubmitting = false;
  errors: Errors = {errors: {}};
  dataList: {};
  page: 1;

  constructor(
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
    alert("yo!");
  }

  btEdit(arg){
    alert("Edit! " + arg);
  }

  btDelete(arg){
    // alert("delete! " + arg);
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
