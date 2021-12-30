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
      primerNombreCofundador: ['', [Validators.required]],
      segundoNombreCofundador: ['',[]],
      primerApellidoCofundador: ['', [Validators.required]],
      segundoApellidoCofundador: ['', []],
      numeroTelefonicoCofundador: ['', [Validators.required]],
      correoCofundador: ['', [Validators.required, Validators.email]],
      primerNombreRepresentante: ['', [Validators.required]],
      segundoNombreRepresentante: ['',[]],
      primerApellidoRepresentante: ['', [Validators.required]],
      segundoApellidoRepresentante: ['', []]
      
    });

  }

  ngOnInit(): void {
  }

}
