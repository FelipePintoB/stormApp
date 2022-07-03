import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | null = null;
  showSpinner = false;

  constructor(private formBuilder: FormBuilder) { }

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
  }

  onSubmit() {
    console.log("Submit loginS")
    console.log(this.loginForm?.value)
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

}
