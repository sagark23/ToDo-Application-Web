import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

export class Todo {
  constructor(
    public id: Number,
    public description: String,
    public isDone: Boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = []
  username: any;
  message: string;

  constructor(private todoDataService: TodoDataService,
    private authenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.username = this.authenticationService.getLoggedInUser();
    this.getTodos(this.username);
  }

  getTodos(username) {
    this.todoDataService.getTodos(username).subscribe(response => this.getSuccessfullResponse(response));
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo(this.username, id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} successful`;
        this.getTodos(this.username);
      }
    );
  }

  getSuccessfullResponse(response): void {
    console.log(response);
    this.todos = response;
  }
}
