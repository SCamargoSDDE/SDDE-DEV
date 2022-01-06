import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Localidades } from 'src/app/models/localidades';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {

  myForm: FormGroup;
  localidades!: Localidades[];


  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {

    this.myForm = this.fb.group({
      emplendimientoConstituido: ['', [Validators.required]],
      nombreEmprendimiento: ['', [Validators.required]],
      nitEmprendimiento: ['', []],
      fechaCreacionEmprendimiento: ['', []],
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
      localidadEmprendimiento: ['', [Validators.required]],
      correoElectronicoEmprendimiento: ['', [Validators.required, Validators.email]],
      confirmacionCorreoEmprendimiento: ['', []],
      sitioWebEmprendimiento: ['', []],
      numeroTelefonicoEmprendimiento: ['', [Validators.required]],
      numeroTelefonicoAlternativoEmprendimiento: ['', []]
    });

  }

  ngOnInit(): void {
    this.consultarLocalidades();
  }

  consultarLocalidades() {
    this.apiService.getLocalidades().subscribe(
      (success => this.onLocalidades(success)),
      (error => this.onErrorLocalidades(error))
    );
  }

  onLocalidades(success: any) {
    this.localidades = success;
  }

  onErrorLocalidades(error: any) {
    this.snackBar.open("Servicio 'Localidades' no consultado", 'Ok!',
      { duration: 3000 }
    );
  }

  guardar() {
    const formValue = this.myForm.value;
    console.log(formValue)
  }

}
