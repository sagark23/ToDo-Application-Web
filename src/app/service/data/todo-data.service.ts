import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

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
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`, {headers});
  }

  getTodo(username: any, id: any) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: any, todo: Todo) {
    if (todo.id && todo.id > 0) {
      return this.http.put(`${API_URL}/users/${username}/todos/${todo.id}`, todo);
    } else {
      return this.http.post(`${API_URL}/users/${username}/todos`, todo);
    }
  }

  deleteTodo(username, id: any) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  createBasicAuthenticationHeader(){
    return "Basic" + window.btoa("user" + ":" + "password"); 
  }
}
