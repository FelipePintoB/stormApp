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
}
