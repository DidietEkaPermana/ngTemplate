import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, UserService } from '../../../core';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  isSubmitting = false;
  authForm: FormGroup;
  errors: Errors = {errors: {}};
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) { 
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
  
  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home/dashboard';
  }

  submitForm(){
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;

    this.userService
    .attemptAuth(credentials)
    .subscribe(
      data => this.router.navigate([this.returnUrl]),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

}
