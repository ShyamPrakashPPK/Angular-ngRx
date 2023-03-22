import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUnAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (this.auth.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['admin']);
    return false;
  }
}
