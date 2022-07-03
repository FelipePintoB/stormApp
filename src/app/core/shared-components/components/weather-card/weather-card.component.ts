import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather, WeatherLocation } from '@core/interfaces/weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() location: WeatherLocation | null = null;
  @Input() current: CurrentWeather | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
