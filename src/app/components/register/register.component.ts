import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { TipoDocumentoIdentidad } from 'src/app/models/tipoDocumentoIdentidad';

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

  constructor(private fb: FormBuilder, 
              private register: RegisterService, 
              private route: Router,) {
    this.myForm = this.fb.group({
      tipoDocumento: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required]],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', [Validators.required]],
      primerNombre: ['', [Validators.required]],
      segundoNombre: ['', [Validators.required]],
      c1: ['', [Validators.required]],
      c2: ['', [Validators.required]],
      c3: ['', [Validators.required]],
      c4: ['', [Validators.required]],
      c5: ['', [Validators.required]],
      c6: ['', [Validators.required]],
      c7: ['', [Validators.required]],
      c8: ['', [Validators.required]],
      c9: ['', [Validators.required]],
      c10: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      correoElectronico: ['', [Validators.required]],
      confirmacionCorreo: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      numeroContacto: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      confirmarContrasena: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.consultarTipoDocumento();
  }

 consultarTipoDocumento(){
      this.register.getTipoDocumento().subscribe(
      (success => this.onTipoDocumento(success)),
      (error => this.onErrorTipoDocumento(error))
    );
  }
  onTipoDocumento(success: any){
    this.tiposDocumento = success;
    console.log(success);
  }
  onErrorTipoDocumento(error: any){
    console.log(error);
  }


  registrarse() {
    /*se agregar esto para eliminar la observacion de angualr respecto al posible null: "strictNullChecks": false,*/
    this.direccion = this.myForm.get('c1').value + ' ' + this.myForm.get('c2').value + ' ' + this.myForm.get('c3').value + ' ' + this.myForm.get('c4').value + ' ' + this.myForm.get('c5').value + ' ' + this.myForm.get('c6').value + ' # ' + this.myForm.get('c7').value + ' ' + this.myForm.get('c8').value + ' ' + this.myForm.get('c9').value + ' ' + this.myForm.get('c10').value;     

    const registro = {
      tipoDocumento: this.myForm.get('tipoDocumento').value,
      numeroDocumento: this.myForm.get('numeroDocumento').value,
      primerApellido: this.myForm.get('primerApellido').value,
      segundoApellido: this.myForm.get('segundoApellido').value,
      primerNombre: this.myForm.get('primerNombre').value,
      segundoNombre: this.myForm.get('segundoNombre').value,
      direccion: this.direccion,
      correoElectronico: this.myForm.get('correoElectronico').value,
      confirmacionCorreo: this.myForm.get('confirmacionCorreo').value,
      fechaNacimiento: this.myForm.get('fechaNacimiento').value,
      numeroContacto: this.myForm.get('numeroContacto').value,
      contrasena: this.myForm.get('contrasena').value,
      confirmarContrasena: this.myForm.get('confirmarContrasena').value
    };
    
    console.log(registro);
    
    /*
    this.register.registrarEmprendedor(Persona).subscribe(
      (success => this.onAgregarSuccess(success)),
      (error => this.onAgregarError(error))
    );
    */

  }
  /*
  onAgregarSuccess(success){
    console.log('Emprendedor registrado');
    
    this.snackBar.open('El cliente fue registrado con exito!', '', {
      duration: 3000,
    });
    
    this.route.navigate(['/']);
  }
  */

  /*
  onAgregarError(error){
    console.log('incombenientes al registro');
    
    this.snackBar.open('El cliente no pudo ser registrado verifica los campos!', '', {
      duration: 3000,
    });
    
  }
  */
}
