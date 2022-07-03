import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteWeatherRoutingModule } from './favorite-weather-routing.module';
import { FavoriteWeatherComponent } from './components/favorite-weather/favorite-weather.component';
import { SharedComponentsModule } from "@core/shared-components/shared-components.module";

@NgModule({
  declarations: [
    FavoriteWeatherComponent
  ],
  imports: [
    CommonModule,
    FavoriteWeatherRoutingModule,
    SharedComponentsModule
  ]
})
export class FavoriteWeatherModule { }
