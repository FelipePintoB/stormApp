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
      const session = this.loginService.getSesionStatus();
      if (session.status === "Active" && session.user && session.password) {
        this.angularFireAuth.signInWithEmailAndPassword(session.user, session.password);
        this.loginService.setUserName(session.user);
        return true;
      } else {
        this.router.navigate(["/login"]);
        return false;
      }
  }

}
