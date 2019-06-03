import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{

  constructor(private message: String){
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  
  getWelcomeMessage() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean/');
  }

  getWelcomeMessageWithPath(path: String) {
    let authString = this.createBasicAuthenticationHeader();
    let headers = new HttpHeaders({
      Authorization: authString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${path}`, {headers});
  }

  createBasicAuthenticationHeader(){
    return "Basic " + window.btoa("user" + ":" + "password"); 
  }

  constructor(private http:HttpClient) { }
}
