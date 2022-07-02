import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainHeaderComponent } from './components/main-header/main-header.component';
import { SideNavBarComponent } from "./components/side-nav-bar/side-nav-bar.component";

import { SharedPrimeModule } from "./shared-prime/shared-prime.module";

@NgModule({
  declarations: [
    MainHeaderComponent,
    SideNavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedPrimeModule
  ],
  exports: [
    MainHeaderComponent,
    SideNavBarComponent,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedPrimeModule
  ]
})
export class CoreModule { }
