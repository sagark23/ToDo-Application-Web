import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) : boolean{
    if(username==='sa' && password==='dll'){
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() : boolean{
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

  getLoggedInUser() : String{
    return sessionStorage.getItem('authenticatedUser');
  }
}
