import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherSearchRoutingModule } from './weather-search-routing.module';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';


@NgModule({
  declarations: [
    WeatherSearchComponent
  ],
  imports: [
    CommonModule,
    WeatherSearchRoutingModule
  ]
})
export class WeatherSearchModule { }
