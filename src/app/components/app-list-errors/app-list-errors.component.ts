import { Component, Input } from '@angular/core';

import { Errors } from '../../core';

@Component({
  selector: 'app-list-errors',
  templateUrl: './app-list-errors.component.html'
})
export class AppListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => `${key} ${errorList.errors[key]}`);
  }

  get errorList() { return this.formattedErrors; }


}
