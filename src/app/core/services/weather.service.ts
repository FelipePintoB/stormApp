import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from "@env/environment";
import { CurrentWeatherResponse } from '@core/interfaces/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private key: string = environment.key;
  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getLocationWeather(city: string): Observable<CurrentWeatherResponse> {
    let params = new HttpParams;
    params = params.set("key",this.key);
    params = params.set("q",city);
    return this.httpClient.get<CurrentWeatherResponse>(`${this.baseUrl}/current.json`,{params});
  }

}
