import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListUserService {
  constructor(private http: Http) { }

  //Calls the route created by express to list users
  listUsers(){
    return this.http.get('/user/list-users')
    .map( res => res.json())
  }
}
