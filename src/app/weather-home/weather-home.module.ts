import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherHomeRoutingModule } from './weather-home-routing.module';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';


@NgModule({
  declarations: [
    WeatherHomeComponent
  ],
  imports: [
    CommonModule,
    WeatherHomeRoutingModule
  ]
})
export class WeatherHomeModule { }
