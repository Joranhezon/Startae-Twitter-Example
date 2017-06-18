import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from './register-user.service';
import { ListUserService } from '../listUser/list-user.service';
import { DeleteUserService } from './delete-user.service';
import { Router } from '@angular/router';
import { EditUserService } from '../editUser/edit-user.service';

@Component({
  styleUrls:['./register-user.component.scss'],
  templateUrl:'register-user.component.html'
})

export class RegisterUserComponent implements OnInit {
  registerUserForm: FormGroup;
  users: any = [];

  //Responsive form used to register a new user
  constructor(private formBuilder: FormBuilder, private registerUserService: RegisterUserService,
    private listUserService: ListUserService, private deleteUserService: DeleteUserService,
    private router: Router, private editUserService: EditUserService) {
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

  //Triggered when the user hits the edit button
  editUser(user: any) {
    this.editUserService.setUser(user.twitter_username);
    this.router.navigateByUrl('edit-user');
  }

  //Triggered when the user hits the delete button
  deleteUser(twitterUserName: string) {
    this.deleteUserService.deleteUser(twitterUserName)
      .subscribe( res => {
        if (res.status == 200) {
          window.location.reload();
        } else {
          //Do nothing
        }
      })
  }

  //Triggered when the user hits the register button
  submitForm(value: any):void {
    this.registerUserService.registerUser(this.registerUserForm)
      .subscribe( res => {
        if (res.status == 200) {
          window.location.reload();
        } else {
          //Do nothing
        }
      });
  }
}
