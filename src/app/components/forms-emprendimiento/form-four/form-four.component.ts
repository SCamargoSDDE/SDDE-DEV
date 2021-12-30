import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.component.html',
  styleUrls: ['./form-four.component.css']
})
export class FormFourComponent implements OnInit {

  myForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private route: Router,
    private snackBar: MatSnackBar) {

    this.myForm = this.fb.group({
      numeroColaboradores: ['', [Validators.required]],
      intereses: ['', [Validators.required]],
      matriculaMercantil: ['', [Validators.required]],
      informacionTributaria: ['', []],
      motivoNoFormalizacion: ['', [Validators.required]],
      actividadEconomica: ['', []],
      provienenInsumos: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

}
