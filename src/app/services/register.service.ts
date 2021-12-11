import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personas } from '../models/personas';
import { TipoDocumentoIdentidad } from '../models/tipoDocumentoIdentidad';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) {

  }

  getTipoDocumento() :Observable<TipoDocumentoIdentidad[]>{
    let header = new HttpHeaders().set('Tipe-content', 'aplication/json')
    const sellersUrl = `${environment.apiUrl}tiposDocuentoIDen`;
    return this.http.get<TipoDocumentoIdentidad[]>(sellersUrl, {
      headers: header
    });
  }


  registrarEmprendedor(cliente: Usuarios) : Observable<Usuarios>{
    const sellersUrl = `${environment.apiUrl}usuarios`;
    return this.http.post<Usuarios>(sellersUrl, cliente);
  }

/*  getCliente(index: number): Observable<Cliente>{
    const sellersUrl = `${environment.apiUrl}${index}`;
    return this.http.get<Cliente>(sellersUrl)
  }
  */
}
