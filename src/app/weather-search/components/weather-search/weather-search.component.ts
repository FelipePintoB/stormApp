import { Component, OnInit } from '@angular/core';

import { WeatherService } from "@core/services/weather.service";

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getLocationWeather().subscribe({
      next: (data) => {console.log(data)},
      error: (error) => console.error(error),
    })
  }

}
