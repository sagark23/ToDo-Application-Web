import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==='sa' && this.password==='dll'){
      this.router.navigate(['welcome', this.username])
      this.validCredentials=true
    }else{
      this.validCredentials=false
    }
    console.log(this.username);
  }
}
