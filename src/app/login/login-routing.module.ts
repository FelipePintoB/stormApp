import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoverComponent } from './components/password-recover/password-recover.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "password-recover",
    component: PasswordRecoverComponent
  },
  {
    path: "email-verification",
    component: EmailVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
