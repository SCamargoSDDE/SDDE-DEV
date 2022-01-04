import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personas } from '../models/personas';
import { TipoDocumentoIdentidad } from '../models/tipoDocumentoIdentidad';
import { Usuarios } from '../models/usuarios';
import { LoginForm } from '../models/login-form';
import { JwtResponse } from '../models/jwt-response';
import { Emprendimientos } from '../models/emprendimientos';
import { Localidades } from '../models/localidades';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {

  }
  //tipos de documentos utilizados en los formularios de registro
  getTipoDocumento(): Observable<TipoDocumentoIdentidad[]> {
    let header = new HttpHeaders().set('Tipe-content', 'aplication/json')
    const sellersUrl = `${environment.apiUrl}tiposDocuentoIDen`;
    return this.http.get<TipoDocumentoIdentidad[]>(sellersUrl, {
      headers: header
    });
  }

    //tipos de documentos utilizados en los formularios de registro
    getLocalidades(): Observable<Localidades[]> {
      let header = new HttpHeaders().set('Tipe-content', 'aplication/json')
      const sellersUrl = `${environment.apiUrl}localidades`;
      return this.http.get<Localidades[]>(sellersUrl, {
        headers: header
      });
    }



  registrarEmprendedor(cliente: Usuarios): Observable<Usuarios> {
    const sellersUrl = `${environment.apiUrl}usuarios`;
    return this.http.post<Usuarios>(sellersUrl, cliente);
  }

  //le falta validar , no fiarse
  formularioUnoEmpredimiento(formulario: Emprendimientos): Observable<Emprendimientos> {
    const sellersUrl = `${environment.apiUrl}formularioUno`;
    return this.http.post<Emprendimientos>(sellersUrl, formulario);
  }

  /*  getCliente(index: number): Observable<Cliente>{
      const sellersUrl = `${environment.apiUrl}${index}`;
      return this.http.get<Cliente>(sellersUrl)
    }
    */

  //login
  public Login(loginForm: LoginForm): Observable<JwtResponse> {
    const sellersUrl = `${environment.apiUrl}usuarios/Login`;
    return this.http.post<JwtResponse>(sellersUrl, loginForm);
  }
}
