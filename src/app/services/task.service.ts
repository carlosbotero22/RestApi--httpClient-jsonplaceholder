import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task }  from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'https://jsonplaceholder.typicode.com';//creamos la variable privada para no repetirla
  constructor(private http: HttpClient) { }

  getAllTasks(){//hacemos la peticion de traer todas las tareas
    const path = `${this.api}/todos/`; //apuntamos a nuestra API y endpoint
    return this.http.get<Task[]>(path);//retornamos un array y get por que solicitamos la informacion
  }

  getTask(id: string){
    const path = `${this.api}/todos/${id}`;
    return this.http.get<Task>(path);// retornamos el objeto tipo task
  }

  createTask(task: Task) {
    const path = `${this.api}/todos`;
    return this.http.post(path, task);
  }

  updateTask(task: Task) {//para actualizar la tarea
    const path = `${this.api}/todos/${task.id}`;
    return this.http.put<Task>(path, task);
  }

  deleteTask(id: string) {
    const path = `${this.api}/todos/${id}`;
    return this.http.delete(path);
  }

}
