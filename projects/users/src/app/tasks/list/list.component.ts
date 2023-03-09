import { Component, OnInit } from '@angular/core';
import { Task } from 'projects/users/src/models/task.model';
import { getTasks } from 'projects/users/src/services/mock.data';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'sdi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks: Task[];
  constructor(public srv: TasksService) {
    this.tasks = [];
  }
  async ngOnInit(): Promise<void> {
    this.srv.tasks$.subscribe((data) => {
      this.tasks = data;
      console.log('Tasks', this.tasks);
    });
  }

  handleDelete(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }
  handleChange(task: Task) {
    this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
    console.log(this.tasks);
  }
  handleAdd(task: Task) {
    this.tasks.push(task);
    console.log(this.tasks);
  }
}
