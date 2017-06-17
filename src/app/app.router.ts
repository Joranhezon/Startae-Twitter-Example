import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from '../pages/user/registerUser/register-user.component';

export const router: Routes = [
  { path: '', redirectTo:'register-user', pathMatch: 'full' },
  { path: 'register-user', component: RegisterUserComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
