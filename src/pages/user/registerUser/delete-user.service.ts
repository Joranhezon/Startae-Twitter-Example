import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeleteUserService {
  constructor(private http: Http) { }

  //Calls remote method that deletes an user
  deleteUser(userTwitterName: any) {
    return this.http.delete('/user/delete-user', {body: userTwitterName})
      .map(res => res.json())
  }
}
