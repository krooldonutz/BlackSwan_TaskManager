import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask = {
    title: '',
    description: '',
    completed: false
  };

  constructor(private taskService: TaskService) { }

  addTask() {
    this.taskService.addTask(this.newTask).subscribe(task => {
      // Handle success, reset form, or navigate to the task list.
    });
  }
}
