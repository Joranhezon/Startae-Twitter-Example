import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl:'register-user.component.html'
})

export class RegisterUserComponent {
  registerUserForm: FormGroup;

  //Responsive form used to register a new user
  constructor(private formBuilder: FormBuilder) {
    this.registerUserForm = formBuilder.group({
      'name': [null, Validators.required],
      'twitter_username': [null, Validators.required]
    });
  }

  submitForm(value: any):void {
    console.log(this.registerUserForm.value);
  }
}
