import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.scss'],
  providers: [MessageService]
})
export class PasswordRecoverComponent implements OnInit {

  recoverForm: FormGroup | null = null;
  showSpinner = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private angularFireAuth: AngularFireAuth,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.recoverForm = this.formBuilder.group({
      email:  [ "", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.email
      ]],
    });
  }

  onSubmit(): void {
    const email = this.recoverForm?.value.email;
    this.showSpinner = true;
    this.angularFireAuth.sendPasswordResetEmail(email).then(() => {
      this.toastRegisterSucces(email);
      setTimeout(() => {
        this.showSpinner = false;
      }, 5000);
    }).catch((error) => {
      this.recoveryError(error.code);
      this.showSpinner = false;
    })
  }

  private recoveryError(code: string): void {
    let errorMessage = "Error with recovery system";
    if (code == "auth/wrong-password") {
      errorMessage = "Wrong password";
    } else if (code == "auth/user-not-found") {
      errorMessage = "User not found";
    }
    this.messageService.add({severity:'error', summary: 'Error', detail: `${errorMessage}`});
  }

  private toastRegisterSucces(name: string): void {
    const mesage = `We has sent you an email to ${name}, please check your inbox, it could be in SPAM folder.`
    this.messageService.add({severity:'success', summary: 'Success', detail: mesage});
  }

}
