import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent} from '../pages/home/home-page.component';
import { RegisterUserComponent } from '../pages/user/registerUser/register-user.component';

export const router: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'register-user', component: RegisterUserComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
