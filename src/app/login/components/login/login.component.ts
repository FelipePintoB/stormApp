import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | null = null;
  showSpinner = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private angularFireAuth: AngularFireAuth,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:  [ "", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.email
      ]],
      password:  [ "", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]],
    });
    this.angularFireAuth.signOut();
  }

  login(): void {
    const email = this.loginForm?.value.email;
    const password = this.loginForm?.value.password;
    this.showSpinner = true;
    this.angularFireAuth.signInWithEmailAndPassword(email,password).then((data) => {
      console.log(data)
      if(data.user?.emailVerified) {
        this.toastRegisterSucces(email);
        setTimeout(() => {
          this.router.navigate(["/weather-search"])
        }, 3000);
      } else {
        this.showInfoMessage(email);
        setTimeout(() => {
          this.showSpinner = false;
        }, 300);
      }
    }).catch((error) => {
      console.error(error);
      this.loginError(error.code);
      this.showSpinner = false;
    })
  }

  private loginError(code: string): void {
    let errorMessage = "Error with login system";
    if (code == "auth/wrong-password") {
      errorMessage = "Wrong password";
    } else if (code == "auth/user-not-found") {
      errorMessage = "User not found";
    }
    this.messageService.add({severity:'error', summary: 'Error', detail: `${errorMessage}`});
  }

  private toastRegisterSucces(name: string): void {
    const mesage = `Login for ${name} correct`
    this.messageService.add({severity:'success', summary: 'Success', detail: mesage});
  }

  private showInfoMessage(name: string): void {
    const messate = `A email has been sent to verify your email: ${name}, it could be in SPAM folder.`
    this.messageService.add({severity:'info', summary: 'Info', detail: messate});
  }

}
