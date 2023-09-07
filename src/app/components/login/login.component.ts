
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: any;
  public submitted = false;
  constructor(private formBuilder: FormBuilder,    private router: Router) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ["",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]]
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    this.loginForm.markAllAsTouched();
  }
}
