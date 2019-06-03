import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let basicAuthString = "Basic " + window.btoa("user" + ":" + "password"); 
    req = req.clone({
      setHeaders: {
        Authorization: basicAuthString
      }
    })

    return next.handle(req);
  }

  constructor() { }
}
