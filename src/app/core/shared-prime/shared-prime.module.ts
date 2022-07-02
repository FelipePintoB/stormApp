import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    MenuModule,
    FieldsetModule,
  ],
  exports: [
    ButtonModule,
    PanelModule,
    MenuModule,
    FieldsetModule,
  ]
})
export class SharedPrimeModule { }
