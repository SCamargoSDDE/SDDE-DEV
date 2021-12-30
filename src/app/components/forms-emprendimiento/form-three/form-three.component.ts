import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.css']
})
export class FormThreeComponent implements OnInit {

  myForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private register: RegisterService,
    private route: Router,
    private snackBar: MatSnackBar) {

    this.myForm = this.fb.group({
      emplendimientoConstituido: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required]],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', []],
      primerNombre: ['', [Validators.required]],
      segundoNombre: ['', []],
      c1: ['', [Validators.required]],
      c2: ['', [Validators.required]],
      c3: ['', []],
      c4: ['', []],
      c5: ['', []],
      c6: ['', []],
      c7: ['', [Validators.required]],
      c8: ['', []],
      c9: ['', []],
      c10: ['', []],
      correoElectronico: ['', [Validators.required, Validators.email]],
      confirmacionCorreo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', [Validators.required]],
      numeroCelular: ['', [Validators.required]],
      numeroFijo: ['', []],
      contrasena: ['', [Validators.required]],
      confirmarContrasena: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

}
