import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from "@core/services/login.service";
import { FavoriteService } from '@core/services/favorite.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite-weather',
  templateUrl: './favorite-weather.component.html',
  styleUrls: ['./favorite-weather.component.scss']
})
export class FavoriteWeatherComponent implements OnInit {

  userNameSubscription: Subscription | null = null;
  favoriteSubs: Subscription | null = null;

  userName = "";

  constructor(private favoriteService: FavoriteService,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.userNameSubscription = this.loginService.userName.subscribe({
      next: (name) => { this.userName = name},
    });
    this.getAllFavorites();
  }

  ngOnDestroy(): void {
    this.userNameSubscription?.unsubscribe();
    this.favoriteSubs?.unsubscribe();
  }

  getAllFavorites() {
    this.favoriteSubs = this.favoriteService.getAllFavorites(this.userName).subscribe({
      next: (data) => {
        console.log(data)
      }
    });
  }

}
