import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

import { SharedPrimeModule } from "@core/shared-prime/shared-prime.module";

@NgModule({
  declarations: [
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    SharedPrimeModule
  ],
  exports: [
    WeatherCardComponent
  ]
})
export class SharedComponentsModule { }
