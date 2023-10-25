import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task: any;
  taskId: string = "";

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskId = id;
      this.taskService.getTask(this.taskId).subscribe(task => {
        this.task = task;
      });
    } else {
      // Handle the case where 'id' is null by redirecting to the task list page
      this.router.navigate(['/task-list']); // Modify the route to match your application's setup
    }
  }

  saveChanges() {
    this.taskService.updateTask(this.taskId, this.task).subscribe(updatedTask => {
      // Handle success or navigate back to the task list.
      this.router.navigate(['/task-list']); // Redirect back to the task list page after saving changes
    });
  }
}
