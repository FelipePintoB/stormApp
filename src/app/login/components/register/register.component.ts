import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | null = null;
  showSpinner = false;

  constructor(private formBuilder: FormBuilder) { }

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

  onSubmit() {
    console.log("Submit loginS")
    console.log(this.registerForm?.value)
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

}
