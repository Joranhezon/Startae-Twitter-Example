import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListTweetsService {
  user: Object;

  constructor(private http: Http) { }

  //Get tweets from the user
  getTweets(user: any) {
    return this.http.post('/twitter/get-tweets', user)
    .map( res =>
      res.json())
  }
}
