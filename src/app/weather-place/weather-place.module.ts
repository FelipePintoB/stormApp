import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherPlaceRoutingModule } from './weather-place-routing.module';
import { WeatherPlaceComponent } from './components/weather-place/weather-place.component';


@NgModule({
  declarations: [
    WeatherPlaceComponent
  ],
  imports: [
    CommonModule,
    WeatherPlaceRoutingModule
  ]
})
export class WeatherPlaceModule { }
