import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authApi: ServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token= this.authApi.getToken();
    console.log('token_interceptor', token);
    
    request= request.clone({
      setHeaders: {
        Authorization: "Bearer" + token
      }
    })
    return next.handle(request);
  }
}
