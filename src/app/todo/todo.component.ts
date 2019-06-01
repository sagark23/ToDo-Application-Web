import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: Number;
  username: String;
  todo: Todo;
  message: String;

  constructor(private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private authenticationService: HardcodedAuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.username = this.authenticationService.getLoggedInUser();
    this.todo = new Todo(this.id, "", false, new Date());
    if (this.id > 0) {
      this.todoDataService.getTodo(this.username, this.id).subscribe(
        response => {
          this.todo = response;
          console.log(response);
        }
      );
    }
  }

  saveTodo() {
    this.todoDataService.updateTodo(this.username, this.todo).subscribe(
      response => {
        this.message = `Update of Todo ${this.todo.id} successful`;
        this.router.navigate(['todos'])
      }
    );
  }

}
