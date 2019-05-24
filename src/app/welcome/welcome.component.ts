import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = 'Welcome ';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.welcomeMessage += this.route.snapshot.params['name'];
  }

}
