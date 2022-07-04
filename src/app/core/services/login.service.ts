import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userName: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  setUserName(name: string): void {
    this.userName.next(name);
  }

  setSesionStatus(status: string, user: string, password: string): void {
    localStorage.setItem("loggedInStatus", status);
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
  }

  closeSesionStatus(): void {
    localStorage.removeItem("loggedInStatus");
    localStorage.removeItem("user");
    localStorage.removeItem("password");
  }

  getSesionStatus() {
    const status = localStorage.getItem("loggedInStatus");
    const user = localStorage.getItem("user");
    const password = localStorage.getItem("password");
    return {status, user, password};
  }

}
