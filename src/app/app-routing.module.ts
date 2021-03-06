import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [  
{ path: 'home', component: LandingPageComponent },
{ path: 'profile', component: ProfilePageComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: '',  redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
