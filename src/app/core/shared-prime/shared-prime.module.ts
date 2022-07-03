import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';

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
    ToastModule,
    PasswordModule
  ],
  exports: [
    ButtonModule,
    PanelModule,
    MenuModule,
    FieldsetModule,
    InputTextModule,
    TooltipModule,
    ToastModule,
    PasswordModule
  ]
})
export class SharedPrimeModule { }
