import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Router } from '@angular/router';

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
    private authenticationService: HardcodedAuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.username = this.authenticationService.getLoggedInUser();
    this.getTodos(this.username);
  }

  getTodos(username) {
    this.todoDataService.getAllTodos(username).subscribe(response => this.getSuccessfullResponse(response));
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo(this.username, id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} successful`;
        this.getTodos(this.username);
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id])
  }

  createTodo(){
    this.router.navigate(['todos', 0]);
  }

  getSuccessfullResponse(response): void {
    console.log(response);
    this.todos = response;
  }
}
