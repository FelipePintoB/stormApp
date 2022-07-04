import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | null = null;
  showSpinner = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private angularFireAuth: AngularFireAuth,
              private messageService: MessageService,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
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
      passwordSecond:  [ "", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]],
    });
  }

  register(): void {
    console.log(this.registerForm?.value)
    const email = this.registerForm?.value.email;
    const password = this.registerForm?.value.password;
    this.showSpinner = true;
    this.angularFireAuth.createUserWithEmailAndPassword(email,password).then(() => {
      this.toastRegisterSucces(email);
      this.sendVerification();
    }).catch(error => {
      console.error(error);
      this.authError(error.code);
      this.showSpinner = false;
    });
  }

  private authError(code: string): void {
    let errorMessage = "Error with auth system";
    if (code == "auth/email-already-in-use") {
      errorMessage = "Email is already in use";
    } else if (code == "auth/weak-password") {
      errorMessage = "Password to weak";
    }
    this.messageService.add({severity:'error', summary: 'Error', detail: errorMessage});
  }

  private toastRegisterSucces(name: string): void {
    const mesage = `${name} has been registered`
    this.messageService.add({severity:'success', summary: 'Success', detail: mesage});
  }

  private sendVerification(): void {
    this.angularFireAuth.currentUser.then((user) => {
      return user?.sendEmailVerification();
    }).then(() => {
      this.showInfoMessage(this.registerForm?.value.email);
      setTimeout(() => {
        this.router.navigate(["/login"]);
      }, 2000);
    }).catch(error => {
      console.error(error);
      this.toastError("Error on verification");
      this.showSpinner = false;
    })
  }

  private showInfoMessage(name: string): void {
    const messate = `A email has been sent to verify your email: ${name}, it could be in SPAM folder.`
    this.messageService.add({severity:'info', summary: 'Info', detail: messate});
  }

  private toastError(name: string): void {
    this.messageService.add({severity:'error', summary: 'Error', detail: name});
  }

}
