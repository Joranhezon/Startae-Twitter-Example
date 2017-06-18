import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from '../pages/user/registerUser/register-user.component';
import { EditUserComponent } from '../pages/user/editUser/edit-user.component';

import { RegisterUserService } from '../pages/user/registerUser/register-user.service';
import { ListUserService } from '../pages/user/listUser/list-user.service';
import { DeleteUserService } from '../pages/user/registerUser/delete-user.service';
import { EditUserService } from '../pages/user/editUser/edit-user.service';
import { ListTweetsComponent } from '../pages/listTweets/list-tweets.component';
import { ListTweetsService } from '../pages/listTweets/list-tweets.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    EditUserComponent,
    ListTweetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [
    RegisterUserService,
    ListUserService,
    EditUserService,
    DeleteUserService,
    ListTweetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
