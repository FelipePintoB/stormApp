import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CurrentWeather, CurrentWeatherResponse, WeatherLocation } from '@core/interfaces/weather';
import { WeatherService } from "@core/services/weather.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
  providers: [MessageService]
})
export class WeatherSearchComponent implements OnInit {

  currentWeather: CurrentWeatherResponse | null = null;

  location: WeatherLocation | null = null;
  current: CurrentWeather | null = null;

  searchForm: FormGroup | null = null;

  errorMessage: string = "";

  constructor(private weatherService: WeatherService,
              private messageService: MessageService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchValue:  [ "", [
        Validators.required,
        Validators.pattern("^[a-zA-Z \s]*$"),
        Validators.minLength(3),
        Validators.maxLength(25)
      ] ],
    });
  }

  onSubmit(): void {
    this.weatherService.getLocationWeather(this.searchForm?.value.searchValue).subscribe({
      next: (data) => {
        console.log(data)
        this.currentWeather = data;
        this.location = this.currentWeather.location;
        this.current = this.currentWeather.current;
      },
      error: (error) => {
        console.error(error)
        if (error.status >= 400) {
          this.showError("No matching location found.");
        }
      },
    });
  }

  get currentSeach() {
    return this.searchForm?.get("searchValue");
  }

  showError(errorMessage: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: `${errorMessage}`});
  }

  onReject() {
    this.messageService.clear('c');
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  clearForm() {
    this.currentSeach?.setValue("");
    this.currentSeach?.markAsPristine()
    this.currentSeach?.markAsUntouched()
  }

}
