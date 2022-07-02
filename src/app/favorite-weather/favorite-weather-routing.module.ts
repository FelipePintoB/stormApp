import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteWeatherComponent } from './components/favorite-weather/favorite-weather.component';

const routes: Routes = [
  {
    path: "",
    component: FavoriteWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteWeatherRoutingModule { }
