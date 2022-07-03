import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrentWeather, WeatherLocation } from '@core/interfaces/weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() location: WeatherLocation | null = null;
  @Input() current: CurrentWeather | null = null;
  @Output() favorite = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addFavorite(): void {
    console.log("Se añade")
    console.log(this.current)
    this.favorite.emit(this.location?.name)
  }

}
