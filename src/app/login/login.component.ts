import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router: Router,
    private authenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.authenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.validCredentials=true
    }else{
      this.validCredentials=false
    }
    console.log(this.username);
  }
}
