import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})

export class UserSignUpComponent implements OnInit {

  signupObj: any = {
    Name: "",
    Email: "",
    Password: ""
  };
  loginObj: any = {
    Name: "",
    Password: ""
  }

  constructor(private userServices: UserService, private route: Router, private store: Store) { }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }
  doSignUp() {
    console.log(this.signupObj)
    this.userServices.addUser(this.signupObj).subscribe(data => {
      if (data.status) {
        window.alert("user created")
      } else {
        window.alert("creation error")
      }
      console.log(data)
    })
  }
  doLogin() {
    console.log("click")
    // this.store.dispatch(AuthActions.LoginRequest(this.loginObj))
    this.userServices.dologin(this.loginObj).subscribe(data => {
      console.log(data)
      if (data.status) {
        localStorage.setItem('userTocken', data.tocken);
        localStorage.setItem('userName', data.user.Name);
        localStorage.setItem('userEmail', data.user.Email);
        localStorage.setItem('Id', data.user.Id);
        localStorage.setItem('image', data.user.Image)
        console.log(data.user)
        this.route.navigate(['user'])
      }
    })
  }
}



