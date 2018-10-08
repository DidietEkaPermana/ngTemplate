import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Errors, UserService } from '../../../core';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  isSubmitting = false;
  authForm: FormGroup;
  errors: Errors = { errors: {} };
  returnUrl: string;

  constructor(
    private router: Router,
    private userService: UserService,
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
    // get return url from route parameters or default to '/'
    this.returnUrl = '/login';
  }

  submitForm(){
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;

    this.userService
    .Insert(credentials)
    .subscribe(
      data => this.router.navigate([this.returnUrl]),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

}
