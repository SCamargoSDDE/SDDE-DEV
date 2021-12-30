import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.css']
})
export class FormThreeComponent implements OnInit {

  myForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private route: Router,
    private snackBar: MatSnackBar) {

    this.myForm = this.fb.group({
      sectorProductivo: ['', [Validators.required]],
      intereses: ['', [Validators.required]],
      numeroColaboradores: ['', [Validators.required]],
      descripcionEmprendimiento: ['', []],
      publicoEmprendimiento: ['', [Validators.required]],
      dpropuestaEmprendimiento: ['', []],
      problemaEmprendimiento: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

}
