import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup } from '@angular/forms';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterUserService {
  constructor(private http: Http) { }

  //Calls the route created by express to register an user
  registerUser(userValue: FormGroup) {
    return this.http.post('/user/register-user', userValue.value)
      .map(res => res.json())
  }
}
