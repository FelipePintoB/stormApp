import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { SharedPrimeModule } from "@core/shared-prime/shared-prime.module";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordRecoverComponent } from './components/password-recover/password-recover.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordRecoverComponent,
    EmailVerificationComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedPrimeModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
