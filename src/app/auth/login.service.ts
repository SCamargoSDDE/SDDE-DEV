import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtResponse } from '../models/jwt-response';
import { environment } from '../../environments/environment';
import { LoginForm } from '../models/login-form';

import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<JwtResponse>;
  public currentUser: Observable<JwtResponse>;

  constructor(    private router: Router,private storage: StorageService,private api: ApiService) {
    this.currentUserSubject = new BehaviorSubject<JwtResponse>(storage.get(environment.jwtoken));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): JwtResponse {
    return this.currentUserSubject.value;
  }

  login(loginForm: LoginForm) {
    return this.api.Login(loginForm);
  }

  loginSuccess(jwtResponse?: JwtResponse) {
    this.storage.set(environment.jwtoken, jwtResponse);
    this.currentUserSubject.next(jwtResponse);
  }

  logout() {
    this.storage.remove(environment.jwtoken);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
