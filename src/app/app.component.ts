import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestApi';

  constructor(private taskService: TaskService) { }

  getAllTasks() {//hacemos la peticion de traer todas las tareas
    this.taskService.getAllTasks()
      .subscribe(tasks => {
        console.log(tasks);
      });
  }


  getTask() {
    this.taskService.getTask('5')
      .subscribe(task => {
        console.log(task);
      });
  }

  createTask() {
    const task = {
      userId: '1',
      title: 'prueba',
      completed: true
    };
    this.taskService.createTask(task)
      .subscribe((newTask) => {
        console.log(newTask);
      });
  }

  updateTask() {
    const task = {
      id:'200',
      userId: '1',
      title: 'prueba 2',
      completed: true
    };
    this.taskService.updateTask(task)
      .subscribe(task => {
        console.log(task);
      });
  }

  deleteTask() {
    this.taskService.deleteTask('1')
    .subscribe((data) => {
      console.log(data);
    });
  }
}
