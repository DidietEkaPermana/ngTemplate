import { Injectable } from '@angular/core';

import { ApiService } from '../../../core';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
    constructor(
        private apiService: ApiService
    ) { }

    get(page, filter) {
        return this.apiService.post('/users', { page, filter })
            .pipe(map(
                data => {
                    return data;
                }
            ));
    }
}