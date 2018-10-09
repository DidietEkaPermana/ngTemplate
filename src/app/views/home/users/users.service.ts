import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../../core';

@Injectable()
export class UsersService {
    private messageSource = new BehaviorSubject('0');
    currentMessage = this.messageSource.asObservable();

    constructor(
        private apiService: ApiService
    ) { }

    changeMessage(message: string) {
        this.messageSource.next(message)
    }

    insert(data){
        return this.apiService.post('/user', { data })
            .pipe(map(
                data => {
                    return data;
                }
            ));
    }

    get(page, filter) {
        return this.apiService.post('/users', { page, filter })
            .pipe(map(
                data => {
                    return data;
                }
            ));
    }

    getById(id) {
        return this.apiService.get('/users/'+ id)
            .pipe(map(
                data => {
                    return data;
                }
            ));
    }

    delete(id){
        return this.apiService.delete('/users/' + id )
            .pipe(map(
                data => {
                    return data;
                }
            ));
    }
}