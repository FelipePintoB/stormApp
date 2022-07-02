import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private key: string = environment.key;
  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getLocationWeather() {
    let params = new HttpParams;
    params = params.set("key",this.key);
    params = params.set("q","barrancabermeja");
    return this.httpClient.get(`${this.baseUrl}/current.json`,{params})
  }

}
