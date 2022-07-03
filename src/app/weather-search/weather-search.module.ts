import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { WeatherSearchRoutingModule } from './weather-search-routing.module';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { SharedPrimeModule } from "@core/shared-prime/shared-prime.module";
import { SharedComponentsModule } from "@core/shared-components/shared-components.module";

@NgModule({
  declarations: [
    WeatherSearchComponent
  ],
  imports: [
    CommonModule,
    WeatherSearchRoutingModule,
    SharedPrimeModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ]
})
export class WeatherSearchModule { }
