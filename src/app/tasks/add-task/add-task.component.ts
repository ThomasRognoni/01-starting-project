import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { TasksService } from '../tasks.service'; // <-- Import TasksService

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  imports: [FormsModule], // <-- Add FormsModule here for using ngModel
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() add = new EventEmitter<{
    title: string;
    summary: string;
    dueDate: string;
  }>();
  @Output() cancel = new EventEmitter<void>();

  title = '';
  summary = '';
  dueDate = '';
  private tasksService = inject(TasksService);

  onSubmit() {
    if (this.title && this.summary && this.dueDate) {
      this.tasksService.addTask(
        {
          title: this.title,
          summary: this.summary,
          dueDate: this.dueDate,
          id: '',
          userId: this.userId,
        },
        this.userId
      );
      this.cancel.emit();
    }
  }
}
