import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let basicAuthString = this.basicAuthService.getAuthenticatedToken();
    let user = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthString && user) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      })
    }
    return next.handle(req);
  }

  constructor(private basicAuthService: BasicAuthenticationService) { }
}
