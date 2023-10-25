import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000'; // Your backend API URL

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(`${this.baseUrl}/tasks`);
  }

  getTask(id: string) {
    return this.http.get(`${this.baseUrl}/tasks/${id}`);
  }

  addTask(task: any) {
    return this.http.post(`${this.baseUrl}/tasks`, task);
  }

  updateTask(id: string, task: any) {
    return this.http.patch(`${this.baseUrl}/tasks/${id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.baseUrl}/tasks/${id}`);
  }
}
