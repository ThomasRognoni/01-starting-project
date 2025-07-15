import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, AddTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  showAddTask = false;
  // Add a dummy property to trigger change detection
  refresh = 0;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.showAddTask = false;
    this.refresh++; // Also refresh after adding
  }
}
