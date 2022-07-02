import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/components/page-not-found/page-not-found.component';
import { WeatherPlaceComponent } from "./components/weather-place/weather-place.component";

const routes: Routes = [
  {
    path: "",
    component: WeatherPlaceComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherPlaceRoutingModule { }
