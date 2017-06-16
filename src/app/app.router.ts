import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent} from '../pages/home/home-page.component';

export const router: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
