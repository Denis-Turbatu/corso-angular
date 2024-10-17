import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from "./task/task.component";
import { TaskModalComponent } from "./task-modal/task-modal.component";
import { TaskObject } from './tasks.module';
import { type taskToComplete } from './task-modal/task-modal.module';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskModalComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  isOpenModal: boolean = false;

  constructor(private taskService: TasksService){}

  get selectedUserTask(){
    return this.taskService.getUserTasks(this.userId);
  }

  completedTask(id: string){
    this.taskService.completedTask(id);
  }

  openModal(){
    this.isOpenModal = !this.isOpenModal;
  }

  onModalClose(event: boolean) {
    this.isOpenModal = event;
  }
}
