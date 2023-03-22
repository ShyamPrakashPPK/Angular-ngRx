import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn() {
    return !!localStorage.getItem('userTocken');
  }
  isAdminLoggedIn() {
    return !!localStorage.getItem('adminTocken')
  }
}
