import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from "@core/services/login.service";
import { WeatherService } from "@core/services/weather.service";
import { FavoriteService } from '@core/services/favorite.service';
import { Subscription } from 'rxjs';
import { Favorite } from '@core/interfaces/favorite';
import { CurrentWeatherResponse } from '@core/interfaces/weather';

@Component({
  selector: 'app-favorite-weather',
  templateUrl: './favorite-weather.component.html',
  styleUrls: ['./favorite-weather.component.scss']
})
export class FavoriteWeatherComponent implements OnInit {

  userNameSubscription: Subscription | null = null;
  favoriteSubs: Subscription | null = null;

  weatherArray: CurrentWeatherResponse[] = [];
  favoriteArray: Favorite[] = [];

  userName = "";

  showFavorites = false;

  constructor(private favoriteService: FavoriteService,
              private weatherService: WeatherService,
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
    this.weatherArray = [];
  }

  getAllFavorites() {
    this.weatherArray = [];
    this.showFavorites = false;
    this.favoriteSubs = this.favoriteService.getAllFavorites(this.userName).subscribe({
      next: (data) => {
        this.favoriteArray = [...data];
        console.log(this.favoriteArray)
        this.setWeatherArrayInfo();
      }
    });
  }

  private async setWeatherArrayInfo() {
    for (let i = 0; i < this.favoriteArray.length; i++) {
      const element = this.favoriteArray[i];
      const data = await this.getWeather(element.city);
      if (data) {
        const e = this.weatherArray.find(a => a.location.name === data.location.name);
        if(!e) {
          this.weatherArray.push(data);
        }
      }
    }
    console.log(this.weatherArray)
    this.showFavorites = true;
  }

  private getWeather(cityName: string): Promise<CurrentWeatherResponse | null> {
    return new Promise((resolve, rejects) => {
      this.weatherService.getLocationWeather(cityName).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (error) => {
          console.error(error);
          rejects(null);
        },
      });
    });
  }

  removeFavorite(city: string): void {
    const favorite = this.favoriteArray.find(favorite => favorite.city === city);
    console.log(favorite)
    if (favorite) {
      this.favoriteService.removeFavoriteCity(favorite?.id);
      const index = this.weatherArray.findIndex(w => w.location.name === city);
      if (index > -1) {
        this.weatherArray.splice(index,1);
      }
    }
  }

}
