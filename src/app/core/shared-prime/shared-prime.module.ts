import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    MenuModule,
    FieldsetModule,
    InputTextModule,
    TooltipModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    PanelModule,
    MenuModule,
    FieldsetModule,
    InputTextModule,
    TooltipModule,
    ToastModule
  ]
})
export class SharedPrimeModule { }
