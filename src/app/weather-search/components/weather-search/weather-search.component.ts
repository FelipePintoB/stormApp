import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CurrentWeather, CurrentWeatherResponse, WeatherLocation } from '@core/interfaces/weather';
import { WeatherService } from "@core/services/weather.service";
import { LoginService } from "@core/services/login.service";
import { FavoriteService } from "@core/services/favorite.service";
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
  providers: [MessageService]
})
export class WeatherSearchComponent implements OnInit, OnDestroy {

  currentWeather: CurrentWeatherResponse | null = null;
  location: WeatherLocation | null = null;
  current: CurrentWeather | null = null;
  searchForm: FormGroup | null = null;
  userNameSubscription: Subscription | null = null;

  errorMessage = "";
  lastSearch = "";
  userName = "";

  showSpinner = false;

  constructor(private weatherService: WeatherService,
              private loginService: LoginService,
              private favoriteService: FavoriteService,
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
    this.userNameSubscription = this.loginService.userName.subscribe({
      next: (name) => { this.userName = name},
    });
  }

  ngOnDestroy(): void {
    this.userNameSubscription?.unsubscribe();
  }

  getWeather(): void {
    const currentSearch = this.searchForm?.value.searchValue;
    if (this.lastSearch !== currentSearch) {
      this.lastSearch = currentSearch;
      this.showSpinner = true;
      this.weatherService.getLocationWeather(currentSearch).subscribe({
        next: (data) => {
          console.log(data)
          this.currentWeather = data;
          this.location = this.currentWeather.location;
          this.current = this.currentWeather.current;
          this.showSpinner = false;
        },
        error: (error) => {
          console.error(error)
          if (error.status >= 400) {
            this.showError("No matching location found.");
          }
          this.showSpinner = false;
        },
      });
    } else {
      this.showInfoMessage();
    }
  }

  get currentSeach() {
    return this.searchForm?.get("searchValue");
  }

  showInfoMessage() {
    this.messageService.add({severity:'info', summary: 'Info', detail: 'Please search a new City'});
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
    this.currentSeach?.markAsPristine();
    this.currentSeach?.markAsUntouched();
    this.location = null;
    this.current = null;
  }

  addFavorite(city: string): void {
    this.favoriteService.addFavoriteCity(this.userName, city);
    this.toastFavorite(city);
  }

  private toastFavorite(name: string): void {
    const mesage = `${name} has been added to favorites`
    this.messageService.add({severity:'success', summary: 'Success', detail: mesage});
  }

}
