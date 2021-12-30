import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {LoginService} from './login.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private login: LoginService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401 && !request.url.endsWith('login') && !request.url.endsWith('signin')) {
        this.login.logout();
        location.reload();
        console.log(err);
        const error = err.error.message || err.statusText;
        return throwError(err);
      }
      return throwError(err);
    }));
  }
}
