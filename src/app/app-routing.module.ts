import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "@core/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./weather-home/weather-home.module").then(m => m.WeatherHomeModule),
  },
  {
    path: "weather-place",
    loadChildren: () => import("./weather-place/weather-place.module").then(m => m.WeatherPlaceModule),
  },
  {
    path: "weather-search",
    loadChildren: () => import("./weather-search/weather-search.module").then(m => m.WeatherSearchModule),
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
