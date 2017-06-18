import { Component, OnInit } from '@angular/core';
import { ListTweetsService } from './list-tweets.service';
import { EditUserService } from '../user/editUser/edit-user.service';

@Component({
  templateUrl:'list-tweets.component.html',
  styleUrls:['./list-tweets.component.scss']
})

export class ListTweetsComponent implements OnInit {
  currentUser: Object;
  tweets: any = [];

  constructor( private listTweetsService: ListTweetsService, private editUserService: EditUserService) { }

  //Load the objects before rendering html
  ngOnInit() {
    this.currentUser = this.editUserService.getUser();
    this.listTweetsService.getTweets(this.currentUser)
      .subscribe( tweets => {
        this.tweets = tweets;
        console.log(tweets);
      });
  }
}
