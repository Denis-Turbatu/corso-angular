import { taskToComplete } from "./task-modal/task-modal.module";
import { TaskObject } from "./tasks.module";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks: Array<TaskObject> = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
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

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId)
    }

    addTask(formData: taskToComplete, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: formData.title,
            summary: formData.summary,
            dueDate: formData.date,
        });
    }

    completedTask(id: string) {
        const index = this.tasks.findIndex((task) => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
}