import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

export class AuthenticationBean {

  constructor(private message: String) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {
    let authString = this.createBasicAuthenticationHeader(username, password);
    let headers = new HttpHeaders({
      Authorization: authString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicAuth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem("authenticatedUser", username);
          sessionStorage.setItem("token", authString);
          return data;
        }
      )
    );
  }

  createBasicAuthenticationHeader(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  isAuthenticatedUser(): boolean {
    let user = sessionStorage.getItem('token');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');

  }

  getAuthenticatedUser(): string {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken(): string {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
  }
}
