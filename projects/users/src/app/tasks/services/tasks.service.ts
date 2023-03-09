import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from 'projects/users/src/models/task.model';
import { getTasks } from 'projects/users/src/services/mock.data';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks$: BehaviorSubject<Task[]>;
  constructor() {
    const initialTasks: Task[] = [];
    this.tasks$ = new BehaviorSubject(initialTasks);
    getTasks().then((tasks) => this.tasks$);
  }

  greetings() {
    console.log('Hola');
  }

  handleAdd(task: Task) {
    this.tasks$.value.push(task);
    this.tasks$.next(this.tasks$.value);
    console.log(this.tasks$.value);
  }
}
