import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  matchPassword() {
    return (form: FormGroup): any | null => {

      let pass: string = form.controls['password']?.value;
      let confirmPassword: string = form.controls['confirmPassword']?.value;

      if (pass == null || pass == '' || confirmPassword == null || confirmPassword == '') return null;
      if (pass != null && confirmPassword == null) return null;

      const isMatch = pass === confirmPassword;

      if (!isMatch)
        form.controls['confirmPassword'].setErrors({ isMatch: true });
      else {
        form.controls['confirmPassword'].setErrors(null);
      }
    }
  }

  validateForm(registerForm: FormGroup) {
    for (const field in registerForm.controls) {
      let ctrlValue: string = registerForm.controls[field]?.value;
      if (ctrlValue == null)
        registerForm.controls[field].markAsTouched();
    }
  }
}
