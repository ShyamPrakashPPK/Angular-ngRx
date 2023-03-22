import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { UserLandingPageComponent } from './features/userFeatures/user-landing-page/user-landing-page.component'
import { } from './features/userFeatures/user-sign-up/user-sign-up.component'

import { } from './features/adminFeatures/admin-landing/admin-landing.component'
import { AdminLoginComponent } from './features/adminFeatures/admin-login/admin-login.component'

//autherization
import { AuthGuardService } from './shared/authentications/user/auth-guard.service'
import { UnAuthGuardService } from './shared/authentications/user/un-auth-guard.service'
import { AdminAuthGuardService } from './shared/authentications/admin/auth-guard.service'
import { AdminUnAuthGuardService } from './shared/authentications/admin/un-auth-guard.service'



const routes: Routes = [
  //user routers
  { path: '', component: UserLandingPageComponent, canActivate: [UnAuthGuardService] },
  { path: 'user', component: UserLandingPageComponent, canActivate: [AuthGuardService] },
  { path: 'editUser', component: UserLandingPageComponent, canActivate: [AuthGuardService] },
  //admin routers
  { path: 'admin', component: UserLandingPageComponent, canActivate: [AdminUnAuthGuardService] },
  { path: '', component: UserLandingPageComponent, canActivate: [AdminAuthGuardService] }





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
