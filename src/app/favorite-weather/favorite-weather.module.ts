import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteWeatherRoutingModule } from './favorite-weather-routing.module';
import { FavoriteWeatherComponent } from './components/favorite-weather/favorite-weather.component';


@NgModule({
  declarations: [
    FavoriteWeatherComponent
  ],
  imports: [
    CommonModule,
    FavoriteWeatherRoutingModule
  ]
})
export class FavoriteWeatherModule { }
