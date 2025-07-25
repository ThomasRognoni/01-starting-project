import { Injectable } from '@angular/core';
import { type Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private defaultTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basics and advance features of Angular',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  private tasks = [...this.defaultTasks];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = [...this.defaultTasks];
      this.saveTasks();
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: Task, userId: string) {
    this.tasks = [
      ...this.tasks,
      {
        ...taskData,
        id: 't' + (Math.random() * 100000).toFixed(0),
        userId: userId,
      },
    ];
    this.saveTasks(); // <-- Add this line to persist tasks after adding
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
