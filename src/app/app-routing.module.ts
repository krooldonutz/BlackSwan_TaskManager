import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent }, // List of tasks
  { path: 'tasks/new', component: TaskFormComponent }, // Add new task
  { path: 'tasks/edit/:id', component: TaskEditComponent }, // Edit task by ID
  // Add more routes as needed for your application
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
