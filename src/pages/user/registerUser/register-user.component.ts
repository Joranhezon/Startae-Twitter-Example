import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from './register-user.service';

@Component({
  templateUrl:'register-user.component.html'
})

export class RegisterUserComponent {
  registerUserForm: FormGroup;

  //Responsive form used to register a new user
  constructor(private formBuilder: FormBuilder, private registerUserService: RegisterUserService) {
    this.registerUserForm = formBuilder.group({
      'name': [null, Validators.required],
      'twitter_username': [null, Validators.required]
    });
  }

  submitForm(value: any):void {
    this.registerUserService.registerUser(this.registerUserForm)
    .subscribe( res => {
      if (res.status == 200) {
        window.location.reload();
      } else {
        console.log('Deu ruim');
      }
    });
  }
}
