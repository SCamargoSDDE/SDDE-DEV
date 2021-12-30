import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private route: Router,
    private snackBar: MatSnackBar) {

    this.myForm = this.fb.group({
      primerNombreCofundador1: ['', [Validators.required]],
      segundoNombreCofundador1: ['',[]],
      primerApellidoCofundador1: ['', [Validators.required]],
      segundoApellidoCofundador1: ['', []],
      numeroTelefonicoCofundador1: ['', [Validators.required]],
      correoCofundador1: ['', [Validators.required, Validators.email]],
      primerNombreCofundador2: ['', []],
      segundoNombreCofundador2: ['',[]],
      primerApellidoCofundador2: ['', []],
      segundoApellidoCofundador2: ['', []],
      numeroTelefonicoCofundador2: ['', []],
      correoCofundador2: ['', [, Validators.email]],
      primerNombreCofundador3: ['', []],
      segundoNombreCofundador3: ['',[]],
      primerApellidoCofundador3: ['', []],
      segundoApellidoCofundador3: ['', []],
      numeroTelefonicoCofundador3: ['', []],
      correoCofundador3: ['', [, Validators.email]],
      primerNombreCofundador4: ['', []],
      segundoNombreCofundador4: ['',[]],
      primerApellidoCofundador4: ['', []],
      segundoApellidoCofundador4: ['', []],
      numeroTelefonicoCofundador4: ['', []],
      correoCofundador4: ['', [, Validators.email]],
      primerNombreRepresentante: ['', [Validators.required]],
      segundoNombreRepresentante: ['',[]],
      primerApellidoRepresentante: ['', [Validators.required]],
      segundoApellidoRepresentante: ['', []]
      
    });

  }

  ngOnInit(): void {
  }

}
