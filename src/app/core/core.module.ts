import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { fakeBackendProvider } from './helper/fake-backend'

import {
  ApiService,
  AuthGuard,
  JwtService,
  UserService
} from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ApiService,
    AuthGuard,
    JwtService,
    UserService,
    fakeBackendProvider
  ],
  declarations: []
})
export class CoreModule { }
