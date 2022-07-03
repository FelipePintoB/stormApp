import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.scss']
})
export class PasswordRecoverComponent implements OnInit {

  recoverForm: FormGroup | null = null;
  showSpinner = false;

  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.recoverForm?.value);
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

}
