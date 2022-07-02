import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherHomeRoutingModule } from './weather-home-routing.module';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';
import { SharedPrimeModule } from "@core/shared-prime/shared-prime.module";


@NgModule({
  declarations: [
    WeatherHomeComponent
  ],
  imports: [
    CommonModule,
    WeatherHomeRoutingModule,
    SharedPrimeModule
  ]
})
export class WeatherHomeModule { }
