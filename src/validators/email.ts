import { Directive} from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import * as validator from 'validator';

export function validateEmail(c: AbstractControl) {
  return validator.isEmail(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  }
}

@Directive({
  selector: '[validateEmail][formControlName],[validateEmail][formControl],[validateEmail][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: validateEmail, multi: true }
  ]
})
export class EmailValidator{}