import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
      this.items = [
        {label: 'Search', icon: 'pi pi-search', routerLink: "/weather-search"},
        {label: 'Favorites', icon: 'pi pi-heart-fill', routerLink: "/favorite-weather"},
        {label: 'Sign out', icon: 'pi pi-sign-out', routerLink: "/login"}
      ];
  }
}
