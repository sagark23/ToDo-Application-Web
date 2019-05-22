import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sa'
  password = ''
  errorMessage ='Invalid credentials!'
  validCredentials=true;

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==='sa' && this.password==='dll'){
      this.validCredentials=true
    }else{
      this.validCredentials=false
    }
    console.log(this.username);
  }
}
