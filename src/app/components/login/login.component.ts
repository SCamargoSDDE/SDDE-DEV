import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/login.service';
import { JwtResponse } from 'src/app/models/jwt-response';
import { LoginForm } from 'src/app/models/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      usuaUsuario: ['', [Validators.required]],
      usuaContrasenia: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  login(): void {
    const value = this.myForm.value;

    this.loginService.login(value).subscribe(
      (success => this.onSubmitSuccess(success)),
      (error => this.onSubmitError(error))
    );
  }

  onSubmitSuccess(jwtResponse: JwtResponse) {
    this.loginService.loginSuccess(jwtResponse);
    console.log(jwtResponse);
    this.router.navigate(['/']);
  }

  onSubmitError(error: any) {
    console.log(error);
    /*if (error.status === 401) {
      this.toastr.danger('Usuario o contraseña invalidos', 'Login', { duration: 0 });
    } else if (error.status === 400) {
      this.toastr.danger('Usuario o contraseña invalidos', 'Login', { duration: 0 });
    }*/
  }

}
