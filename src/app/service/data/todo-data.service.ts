import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getAllTodos(username) {
    let authString = this.createBasicAuthenticationHeader();
    let headers = new HttpHeaders({
      Authorization: authString
    })
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`, {headers});
  }

  getTodo(username: any, id: any) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username: any, todo: Todo) {
    if (todo.id && todo.id > 0) {
      return this.http.put(`http://localhost:8080/users/${username}/todos/${todo.id}`, todo);
    } else {
      return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
    }
  }

  deleteTodo(username, id: any) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  createBasicAuthenticationHeader(){
    return "Basic" + window.btoa("user" + ":" + "password"); 
  }
}
