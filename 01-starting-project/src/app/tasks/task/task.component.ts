import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.module';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private taskService = inject(TasksService);

  completeTask(){
    this.taskService.completedTask(this.task.id);
  }
}