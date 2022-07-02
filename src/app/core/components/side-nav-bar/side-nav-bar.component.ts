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
        {label: 'Search', icon: 'pi pi-fw pi-refresh', routerLink: "/weather-search"},
        {label: 'Favorites', icon: 'pi pi-fw pi-download', routerLink: "/favorite-weather"},
      ];
  }
}
