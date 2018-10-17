import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Credentials } from '../+state/models';

@Component({
  selector: 'ay-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isPending = false;
  errorMessage: string | null;

  @Output() submitted = new EventEmitter<Credentials>();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
