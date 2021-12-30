import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-first-start',
  templateUrl: './first-start.component.html',
  styleUrls: ['./first-start.component.css']
})
export class FirstStartComponent implements OnInit {

  nombre: any;
  usuario: any;
  constructor( private login: LoginService) { }

  ngOnInit(): void {
    this.usuario = this.login.currentUserValue;
    this.nombre = this.usuario.personas.personaNatural.penaPrimerNombre
    console.log(this.nombre);
  }

}
