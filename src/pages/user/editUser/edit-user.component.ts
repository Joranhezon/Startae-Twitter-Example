import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EditUserService } from './edit-user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'edit-user.component.html'
})

export class EditUserComponent {
  editUserForm: FormGroup;
  editedUser: Object;

  constructor( private formBuilder: FormBuilder, private editUserService: EditUserService,
    private router: Router) {
    this.editUserForm = formBuilder.group({
      'name': [null, Validators.required],
      'twitter_username': [null, Validators.required],
      'old_twitter_username': [this.editUserService.getUser()]
    });
  }

  submitForm(value :any) :void {
    this.editedUser = this.editUserForm.value;
    this.editUserService.editUser(this.editedUser)
      .subscribe( res =>{
        if (res.status == 200) {
          this.router.navigateByUrl('home');
        } else {
          //Do nothing
        }
      })
    }
}
