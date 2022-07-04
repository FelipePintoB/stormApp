import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginGuard } from "@core/guards/login.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "weather-search", pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
  },
  {
    path: "weather-search",
    canActivate: [LoginGuard],
    loadChildren: () => import("./weather-search/weather-search.module").then(m => m.WeatherSearchModule),
  },
  {
    path: "favorite-weather",
    canActivate: [LoginGuard],
    loadChildren: () => import("./favorite-weather/favorite-weather.module").then(m => m.FavoriteWeatherModule),
  },
  {
    path: "**",
    redirectTo: "login",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
