import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignUpComponent } from './features/userFeatures/user-sign-up/user-sign-up.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserLandingPageComponent } from './features/userFeatures/user-landing-page/user-landing-page.component';
import { AdminLoginComponent } from './features/adminFeatures/admin-login/admin-login.component';
import { AdminLandingComponent } from './features/adminFeatures/admin-landing/admin-landing.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
 


@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    NavbarComponent,
    UserLandingPageComponent,
    AdminLoginComponent,
    AdminLandingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
