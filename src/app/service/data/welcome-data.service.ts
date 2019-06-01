import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${path}`);
  }

  constructor(private http:HttpClient) { }
}
