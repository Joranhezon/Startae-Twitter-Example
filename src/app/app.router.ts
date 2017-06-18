import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from '../pages/user/registerUser/register-user.component';
import { EditUserComponent } from '../pages/user/editUser/edit-user.component';
import { ListTweetsComponent } from '../pages/listTweets/list-tweets.component';

export const router: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: RegisterUserComponent },
  { path: 'edit-user', component: EditUserComponent},
  { path: 'list-tweets', component: ListTweetsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
