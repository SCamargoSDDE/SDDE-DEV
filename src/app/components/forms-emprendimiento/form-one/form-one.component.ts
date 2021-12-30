import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {

  myForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private route: Router,
    private snackBar: MatSnackBar) {

    this.myForm = this.fb.group({
      emplendimientoConstituido: ['', [Validators.required]],
      nombreEmprendimiento: ['', [Validators.required]],
      nitEmprendimiento: ['', [Validators.required]],
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
      correoElectronicoEmprendimiento: ['', [Validators.required, Validators.email]],
      confirmacionCorreoEmprendimiento: ['', [Validators.required, Validators.email]],
      sitioWebEmprendimiento: ['', [Validators.required]],
      numeroTelefonicoEmprendimiento: ['', [Validators.required]],
      numeroTelefonicoAlternativoEmprendimiento: ['', []]
    });

  }

  ngOnInit(): void {
  }

}
