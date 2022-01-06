import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Emprendimientos } from 'src/app/models/emprendimientos';
import { Localidades } from 'src/app/models/localidades';
import { ApiService } from 'src/app/services/api.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private snackBar: MatSnackBar,
    private modalService: NgbModal,
    config: NgbModalConfig
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
      emprCorreoElectronicAlterno: ['', []],
      sitioWebEmprendimiento: ['', []],
      numeroTelefonicoEmprendimiento: ['', [Validators.required]],
      numeroTelefonicoAlternativoEmprendimiento: ['', []]
    });

    //se agrega para que la modal no se disminuya al click
    config.backdrop = 'static';
    config.keyboard = false;
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
    //this.openModal(content);

    let formValue = this.myForm.value;

    let direccion = this.myForm.get('c1').value + ' ' + this.myForm.get('c2').value + ' ' + this.myForm.get('c3').value + ' ' + this.myForm.get('c4').value + ' ' + this.myForm.get('c5').value + ' ' + this.myForm.get('c6').value + ' # ' + this.myForm.get('c7').value + ' ' + this.myForm.get('c8').value + ' - ' + this.myForm.get('c9').value + ' ' + this.myForm.get('c10').value;

    const emprendimiento: any = {
      //emprConstituido: this.myForm.get('emplendimientoConstituido').value,
      emprNombre: this.myForm.get('nombreEmprendimiento').value,
      emprNit: this.myForm.get('nitEmprendimiento').value,
      emprDireccion: direccion,
      emprFechaCreacion: this.myForm.get('fechaCreacionEmprendimiento').value,
      locaId: this.myForm.get('localidadEmprendimiento').value,
      emprCorreoElectronico: this.myForm.get('correoElectronicoEmprendimiento').value,
      emprCorreoElectroniAlterno: this.myForm.get('emprCorreoElectronicAlterno').value,
      emprSitioWeb: this.myForm.get('sitioWebEmprendimiento').value,
      emprTelefonoContacto: this.myForm.get('numeroTelefonicoEmprendimiento').value,
      emprTelefonoContacAlterno: this.myForm.get('numeroTelefonicoAlternativoEmprendimiento').value
    };

    this.apiService.fromularioEmprendimiento(emprendimiento).subscribe(
      (success => this.onAgregarSuccess(success)),
      (error => this.onAgregarError(error))
    );
    console.log(emprendimiento);
    //this.modalService.dismissAll();
  }
  onAgregarSuccess(success: any) {

  }

  onAgregarError(error: any) {

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok!',
      { duration: 3000 }
    );
  }

  //Metodo de apertura de carga apra las modales 
  openModal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'sm'
    });
  }
}
