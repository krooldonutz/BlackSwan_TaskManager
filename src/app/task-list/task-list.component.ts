import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router'; // Import the Router for navigation


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService, private router: Router) { 
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  editTask(taskId: string) {
    // Navigate to the task edit page with the selected task ID
    this.router.navigate(['/edit-task', taskId]); // Define your route as needed
  }
}
