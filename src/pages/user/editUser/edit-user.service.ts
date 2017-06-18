import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EditUserService {
  oldTwitter: string;
  constructor( private http: Http ) {}

  editUser(editUser :any) {
    return this.http.put('/user/edit-user', editUser)
      .map( res =>
        res.json())
  }

  setUser(oldTwitter: any) {
    this.oldTwitter = oldTwitter;
  }

  getUser() {
    return this.oldTwitter;
  }
}
