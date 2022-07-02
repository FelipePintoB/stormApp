import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    MenuModule,
  ],
  exports: [
    ButtonModule,
    PanelModule,
    MenuModule
  ]
})
export class SharedPrimeModule { }
