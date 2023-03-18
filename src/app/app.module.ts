import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './features/userFeatures/user-login/user-login.component';
import { UserSignUpComponent } from './features/userFeatures/user-sign-up/user-sign-up.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserLandingPageComponent } from './features/userFeatures/user-landing-page/user-landing-page.component';
import { UserProfileComponent } from './features/userFeatures/user-profile/user-profile.component';
import { AdminLoginComponent } from './features/adminFeatures/admin-login/admin-login.component';
import { AdminLandingComponent } from './features/adminFeatures/admin-landing/admin-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignUpComponent,
    NavbarComponent,
    UserLandingPageComponent,
    UserProfileComponent,
    AdminLoginComponent,
    AdminLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
