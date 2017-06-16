import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomePageComponent} from '../pages/home/home-page.component';
import { RegisterUserComponent } from '../pages/user/registerUser/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
