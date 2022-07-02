import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "weather-search",
    loadChildren: () => import("./weather-search/weather-search.module").then(m => m.WeatherSearchModule),
  },
  {
    path: "favorite-weather",
    loadChildren: () => import("./favorite-weather/favorite-weather.module").then(m => m.FavoriteWeatherModule),
  },
  {
    path: "**",
    redirectTo: "weather-search",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
