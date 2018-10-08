import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { AuthenticationService } from '../_services';
import { JwtService } from '../services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private jwtService: JwtService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authenticationService.logout();
                this.jwtService.destroyToken();
                location.reload(true);
            }

            if(err.status === 0){
                err.error = {errors: { Name: "Network Error", Message: err.message }};
            }

            if(!err.status){
                err.error = {errors: { "Generic": err.message }};
            }

            return throwError(err);
        }))
    }
}