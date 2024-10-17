import { Component, Input, Output, EventEmitter, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { type taskToComplete } from './task-modal.module';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @Input({ required: true }) isOpen!: boolean;
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<boolean>();
  private taskService = inject(TasksService);
  // @Output() formData = new EventEmitter<taskToComplete>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  closeModal() {
    this.close.emit(false);
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
      this.userId
    );
    this.close.emit(false);
  }
}
