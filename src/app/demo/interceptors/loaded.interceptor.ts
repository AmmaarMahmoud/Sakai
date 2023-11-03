import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoadedInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token =localStorage.getItem('teken');
    if(token){
      const headers = new HttpHeaders()
      headers.set('Authorization',`Bearer ${token}`)
      const modefidRequest = request.clone({headers})
      return next.handle(modefidRequest);
    }
    return next.handle(request);
  }
}
