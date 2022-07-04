import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

import { LoginService } from "@core/services/login.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private angularFireAuth: AngularFireAuth,
              private loginService: LoginService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.angularFireAuth.currentUser.then((user) => {
        if (user?.email && user.emailVerified) {
          this.loginService.setUserName(user.email);
          return true;
        } else {
          this.router.navigate(["/login"]);
          return false;
        }
      }).catch(() => {
        return false;
      });
  }

}
