import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherSearchRoutingModule } from './weather-search-routing.module';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { SharedPrimeModule } from "@core/shared-prime/shared-prime.module";


@NgModule({
  declarations: [
    WeatherSearchComponent
  ],
  imports: [
    CommonModule,
    WeatherSearchRoutingModule,
    SharedPrimeModule
  ]
})
export class WeatherSearchModule { }
