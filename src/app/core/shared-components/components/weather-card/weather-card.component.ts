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
  @Input() isFavorite: boolean = false;
  @Output() favorite = new EventEmitter<string>();

  disableButton = false;

  constructor() { }

  ngOnInit(): void {
  }

  addFavorite(): void {
    this.disableButton = true;
    this.favorite.emit(this.location?.name);
  }

  removeFavorite(): void {
    this.disableButton = true;
    this.favorite.emit(this.location?.name);
  }

}
