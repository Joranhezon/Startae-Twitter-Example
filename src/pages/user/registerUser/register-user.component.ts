import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from './register-user.service';
import { ListUserService } from '../listUser/list-user.service';

@Component({
  templateUrl:'register-user.component.html'
})

export class RegisterUserComponent implements OnInit {
  registerUserForm: FormGroup;
  users: any = [];

  //Responsive form used to register a new user
  constructor(private formBuilder: FormBuilder, private registerUserService: RegisterUserService,
    private listUserService: ListUserService) {
    this.registerUserForm = formBuilder.group({
      'name': [null, Validators.required],
      'twitter_username': [null, Validators.required]
    });
  }

  ngOnInit() {
    //Retrieve a list of users
    this.listUserService.listUsers()
    .subscribe( users => {
      this.users = users;
    })
  }

  //Triggered when the user hits the register button
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
