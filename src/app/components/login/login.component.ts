import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/login.service';
import { JwtResponse } from 'src/app/models/jwt-response';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
    private router: Router,
    private snackBar: MatSnackBar,
    private modalService: NgbModal,
    config: NgbModalConfig, 
  ) {
    this.myForm = this.fb.group({
      usuaUsuario: ['', [Validators.required]],
      usuaContrasenia: ['', Validators.required]
    });

    //se agrega para que la modal no se disminuya al click
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

  }

  login(content:any) {
    const value = this.myForm.value;
    
    //abrimos modal de carga
    this.openModal(content);
    
    this.loginService.login(value).subscribe(
      (success => this.onSubmitSuccess(success)),
      (error => this.onSubmitError(error))
    );

    //Cerramos modal cuando termina la solicitud
    this.modalService.dismissAll();
  }

  onSubmitSuccess(jwtResponse: JwtResponse) {

    this.loginService.loginSuccess(jwtResponse);
    console.log(jwtResponse);
    this.router.navigate(['/primerInicio']);
  }

  onSubmitError(error: any) {
    this.openSnackBar("Usuario o contraseña incorrecto")
    /*if (error.status === 401) {
      this.toastr.danger('Usuario o contraseña invalidos', 'Login', { duration: 0 });
    } else if (error.status === 400) {
      this.toastr.danger('Usuario o contraseña invalidos', 'Login', { duration: 0 });
    }*/
  }

  onAgregarError(error: any) {
    this.openSnackBar(error.error.mensaje)
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok!',
      { duration: 3000 }
    );
  }

  //Metodo de apertura de carga apra las modales 
  openModal(content:any) {
    this.modalService.open(content, {  
      centered: true, 
      size: 'sm'
    });
  }
}
