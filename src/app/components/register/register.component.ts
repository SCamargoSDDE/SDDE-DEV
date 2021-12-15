import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personas } from 'src/app/models/personas';
import { TipoDocumentoIdentidad } from 'src/app/models/tipoDocumentoIdentidad';
import { Usuarios } from 'src/app/models/usuarios';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /*Se inicializa e instancia el formulario a crear  Validators.required*/
  myForm: FormGroup;
  direccion: any;
  tiposDocumento!: TipoDocumentoIdentidad[];
  date: any;

  constructor(private fb: FormBuilder,
    private register: RegisterService,
    private route: Router,
    private snackBar: MatSnackBar) {

    this.myForm = this.fb.group({
      tipoDocumento: ['', [Validators.required]],
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
    this.date = new Date;
    this.consultarTipoDocumento();
  }

  consultarTipoDocumento() {
    this.register.getTipoDocumento().subscribe(
      (success => this.onTipoDocumento(success)),
      (error => this.onErrorTipoDocumento(error))
    );
  }
  onTipoDocumento(success: any) {
    this.tiposDocumento = success;
  }
  onErrorTipoDocumento(error: any) {
    console.log("Servicio no consultado");
  }

  registrarse() {
    /*se agregar esto para eliminar la observacion de angualr respecto al posible null: "strictNullChecks": false,*/
    this.direccion = this.myForm.get('c1').value + ' ' + this.myForm.get('c2').value + ' ' + this.myForm.get('c3').value + ' ' + this.myForm.get('c4').value + ' ' + this.myForm.get('c5').value + ' ' + this.myForm.get('c6').value + ' # ' + this.myForm.get('c7').value + ' ' + this.myForm.get('c8').value + ' - ' + this.myForm.get('c9').value + ' ' + this.myForm.get('c10').value;

    const Usuarios: any = {
      usuaId: null,
      usuaUsuario: null,
      usuaContrasenia: this.myForm.get('contrasena').value,
      usuaEstado: "ACTIVO",
      usuaFechaCreacion: null,
      usuaFechaActualizacion: null,
      personas:
      {
        persId: null,
        persFechaActualizacion: null,
        muniId: null,
        usuaId: null,
        personaJuridica: null,
        persEmprendimientosPasados: null,
        persBiografia: null,
        persFechaCreacion: null,
        persDigitoVerificacion: "1",
        persDireccion: this.direccion,
        persNumeroDocumento: this.myForm.get('numeroDocumento').value,
        persTelCelular: this.myForm.get('numeroCelular').value,
        persTelFijo: null,
        persCorreoElectronico: this.myForm.get('correoElectronico').value,
        tidoId: this.myForm.get('tipoDocumento').value,
        personaNatural: {
          penaId: null,
          penaFechaActualizacion: null,
          acesId: null,
          discId: null,
          gretId: null,
          grpoId: null,
          niedId: null,
          orseId: null,
          persId: null,
          penaPrimerNombre: this.myForm.get('primerNombre').value,
          penaSegundoNombre: this.myForm.get('segundoNombre').value,
          penaPrimerApellido: this.myForm.get('primerApellido').value,
          penaSegundoApellido: this.myForm.get('segundoApellido').value,
          penaFechaNacimiento: this.myForm.get('fechaNacimiento').value,
          penaFechaCreacion: null,
        }
      }
    };

    this.register.registrarEmprendedor(Usuarios).subscribe(
      (success => this.onAgregarSuccess(success)),
      (error => this.onAgregarError(error))
    );

  }

  onAgregarSuccess(success: any) {
    this.openSnackBar(success.mesaje)

    this.route.navigate(['/registroOk']);
  }

  onAgregarError(error: any) {
    this.openSnackBar(error.mesaje)
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok!',
      { duration: 3000 }
    );
  }
}
