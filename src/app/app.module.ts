import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from '../pages/user/registerUser/register-user.component';

import { RegisterUserService } from '../pages/user/registerUser/register-user.service';
import { ListUserService } from '../pages/user/listUser/list-user.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent
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
    ListUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
