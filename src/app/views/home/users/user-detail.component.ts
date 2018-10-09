import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Errors } from '../../../core';
import { UsersService } from './users.service';

@Component({
  templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
    isSubmitting = false;
    message: string;
    errors: Errors = {errors: {}};
    authForm: FormGroup;

    constructor(
        private router: Router,
        private usersService: UsersService,
        private fb: FormBuilder
    ) {
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            'id': ['0'],
            'email': ['', Validators.required],
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() {
        this.usersService.currentMessage.subscribe(message => this.message = message);
        if(this.message != "0")
            this.getData(this.message);
    }

    getData(arg){
        this.usersService
        .getById(arg)
        .subscribe(
            data => {
                // this.data = data;
                this.authForm.setValue({
                    'id': data.id,
                    'email': data.email,
                    'username': data.username,
                    'password': data.password
                });
            },
            err => {
              this.errors = err;
            }
          );
    }

    btCancel(){
        this.router.navigate(['/home/users']);
    }

    submitForm(){
        // this.isSubmitting = true;
        this.errors = {errors: {}};

        const credentials = this.authForm.value;

        this.usersService
        .insert(credentials)
        .subscribe(
        data => {
            this.router.navigate(['/home/users'])
        },
        err => {
            this.errors = err;
            this.isSubmitting = false;
        }
        );
        // alert("ok save");
    }
}