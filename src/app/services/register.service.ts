import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { TipoDocumentoIdentidad } from '../models/tipoDocumentoIdentidad';

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
    const sellersUrl = `${environment.apiUrl}TiposDocumento`;
    return this.http.get<TipoDocumentoIdentidad[]>(sellersUrl, {
      headers: header
    });
  }


  registrarEmprendedor(cliente: Persona) : Observable<Persona>{
    const sellersUrl = `${environment.apiUrl}registrar`;
    return this.http.post<Persona>(sellersUrl, cliente);
  }

/*  getCliente(index: number): Observable<Cliente>{
    const sellersUrl = `${environment.apiUrl}${index}`;
    return this.http.get<Cliente>(sellersUrl)
  }
  */
}
