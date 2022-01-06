import {Injectable} from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private login: LoginService) {
  }

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler): Observable<HttpEvent<unknown>> {
      
    const currentUser = this.login.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `token ${currentUser.token}`,
          Headers: `token ${currentUser.token}`,
          token: `${currentUser.token}`
        }
      });
      console.log(request);
    }
    return next.handle(request);
  }
}
