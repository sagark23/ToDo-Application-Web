import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: String;
  welcomeMessage = 'Welcome ';
  messageFromServer = '';


  constructor(private route: ActivatedRoute,
    private dataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.welcomeMessage += this.name
  }

  getWelcomeMessage() {
    console.log(this.dataService.getWelcomeMessage());
    this.dataService.getWelcomeMessageWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }

  handleErrorResponse(error: any): void {
    this.messageFromServer = "Something went wrong! Please contact support.";
  }

  handleSuccessfulResponse(response: any) {
    this.messageFromServer = response.message;
  }

}
