import { Component, OnInit } from '@angular/core';

import { LoginService } from "@core/services/login.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userNameSub: Subscription | null = null;

  title = 'weatherStormApp';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.userNameSub = this.loginService.userName.subscribe({
      next: (data) => {
        if(data) {
          this.setIntervalSubscription();
        }
      }
    });
  }

  private setIntervalSubscription(): void {

  }

}
