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
          {label: 'weather', icon: 'pi pi-fw pi-plus', routerLink: "/"},
          {label: 'weather-place', icon: 'pi pi-fw pi-download', routerLink: "/weather-place"},
          {label: 'weather-search', icon: 'pi pi-fw pi-refresh', routerLink: "/weather-search"},
          {label: 'Page Not found 1', icon: 'pi pi-fw pi-refresh', routerLink: "/asdfasdf"}
      ];
  }
}
